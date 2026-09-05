const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// Use the project's existing compiler; no DOM, browser driver, or test dependency.
const source = fs.readFileSync(path.join(__dirname, '../components/hero/motion.ts'), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 },
}).outputText;
const moduleExports = {};
vm.runInNewContext(compiled, { exports: moduleExports });
const { getHeroFrame, clampProgress, HERO_TIMELINE, CINEMATIC_MEDIA } = moduleExports;

test('progress clamps safely and starts with the full portrait', () => {
  assert.equal(clampProgress(-1), 0);
  assert.equal(clampProgress(2), 1);
  assert.equal(clampProgress(NaN), 0);
  const frame = getHeroFrame(0);
  assert.equal(frame.portraitScale, 1);
  assert.equal(frame.portraitOpacity, 1);
  assert.equal(frame.introOpacity, 1);
  assert.equal(frame.signatureOpacity, 0);
});

test('portrait reaches the center before fading into the signature', () => {
  const centered = getHeroFrame(HERO_TIMELINE.center[1]);
  assert.equal(centered.center, 1);
  assert.ok(Math.abs(centered.portraitScale - 0.34) < 1e-10);
  assert.equal(centered.portraitOpacity, 1);
  assert.equal(centered.signatureOpacity, 0);
  assert.equal(centered.introOpacity, 0);
  const crossfade = getHeroFrame(0.6);
  assert.ok(crossfade.portraitOpacity > 0 && crossfade.portraitOpacity < 1);
  assert.ok(crossfade.signatureOpacity > 0 && crossfade.signatureOpacity < 1);
});

test('final signature is fully visible and holds before the scene exits', () => {
  const frame = getHeroFrame(1);
  assert.equal(frame.portraitOpacity, 0);
  assert.equal(frame.introOpacity, 0);
  assert.equal(frame.signatureOpacity, 1);
  assert.equal(frame.signatureScale, 1);
  assert.equal(frame.signatureDraw, 1);
  assert.equal(getHeroFrame(0.9).signatureDraw, 1);
});

test('all frames remain bounded and reversible without accumulating state', () => {
  const frames = Array.from({ length: 101 }, (_, index) => getHeroFrame(index / 100));
  frames.forEach((frame, index) => {
    Object.values(frame).forEach(value => assert.ok(value >= 0 && value <= 1));
    if (index) {
      assert.ok(frame.center >= frames[index - 1].center);
      assert.ok(frame.portraitScale <= frames[index - 1].portraitScale);
      assert.ok(frame.signatureDraw >= frames[index - 1].signatureDraw);
    }
  });
  for (let index = 100; index >= 0; index--) {
    assert.deepEqual(getHeroFrame(index / 100), frames[index]);
  }
});

test('CSS and JS share the same desktop and reduced-motion eligibility', () => {
  const css = fs.readFileSync(path.join(__dirname, '../app/globals.css'), 'utf8');
  assert.ok(css.includes(`@media screen and ${CINEMATIC_MEDIA}`));
  assert.ok(css.includes('height: calc(260svh - 88px)'));
  assert.ok(css.includes('stroke-dashoffset: calc(1 - var(--signature-draw, 0))'));
});

function controllerHarness(initiallyEnabled = true, initialScroll = 0) {
  const styles = new Map();
  const events = new Map();
  const frames = new Map();
  const observers = [];
  const changes = new Set();
  let effect;
  let frameId = 0;
  let bodyLeft = 100;
  const body = { getBoundingClientRect: () => ({ left: bodyLeft, width: 1000 }) };
  const anchor = { getBoundingClientRect: () => ({ left: 750, width: 300 }) };
  const scene = { offsetHeight: 712 };
  const root = {
    dataset: {},
    style: { setProperty: (key, value) => styles.set(key, value), removeProperty: key => styles.delete(key) },
    querySelector: selector => ({ '[data-hero-scene]': scene, '[data-hero-body]': body, '[data-portrait-anchor]': anchor })[selector],
    getBoundingClientRect: () => ({ top: 88 - window.scrollY, height: 1992 }),
  };
  const media = {
    matches: initiallyEnabled,
    addEventListener: (_, callback) => changes.add(callback),
    removeEventListener: (_, callback) => changes.delete(callback),
  };
  const window = {
    scrollY: initialScroll,
    matchMedia: () => media,
    addEventListener: (name, callback) => events.set(name, callback),
    removeEventListener: (name, callback) => { if (events.get(name) === callback) events.delete(name); },
    requestAnimationFrame: callback => { frames.set(++frameId, callback); return frameId; },
    cancelAnimationFrame: id => frames.delete(id),
  };
  class ResizeObserver {
    constructor(callback) { this.callback = callback; this.targets = new Set(); observers.push(this); }
    observe(target) { this.targets.add(target); }
    disconnect() { this.targets.clear(); }
  }
  const controllerSource = fs.readFileSync(path.join(__dirname, '../components/hero/CinematicHero.tsx'), 'utf8');
  const controller = ts.transpileModule(controllerSource, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const exports = {};
  vm.runInNewContext(controller, {
    exports, window, ResizeObserver, getComputedStyle: () => ({ top: '88px' }),
    require: name => {
      if (name === './motion') return moduleExports;
      if (name === 'react') return { useRef: () => ({ current: root }), useEffect: callback => { effect = callback; } };
      if (name === 'react/jsx-runtime') return { jsx: () => null, jsxs: () => null };
      throw new Error(`Unexpected dependency ${name}`);
    },
  });
  exports.default({ children: null });
  const cleanup = effect();
  return {
    root, styles, window, events, frames, observers, changes, cleanup,
    flush() { const pending = [...frames.values()]; frames.clear(); pending.forEach(callback => callback()); },
    changeMode(enabled) { media.matches = enabled; [...changes].forEach(callback => callback()); },
    moveBody(left) { bodyLeft = left; },
  };
}

test('controller coalesces scroll events and has no self-scheduling idle loop', () => {
  const env = controllerHarness();
  assert.equal(env.styles.get('--hero-progress'), '0');
  assert.equal(env.frames.size, 0);
  env.window.scrollY = 640;
  for (let i = 0; i < 20; i++) env.events.get('scroll')();
  assert.equal(env.frames.size, 1);
  env.flush();
  assert.equal(env.frames.size, 0);
  assert.equal(env.styles.get('--hero-progress'), '0.5');
  assert.equal(env.styles.get('--portrait-x'), '-300px');
  env.cleanup();
});

test('controller initializes from restored scroll and remeasures on resize', () => {
  const env = controllerHarness(true, 1280);
  assert.equal(env.styles.get('--signature-opacity'), '1');
  env.moveBody(200);
  env.events.get('resize')();
  env.flush();
  assert.equal(env.styles.get('--portrait-x'), '-200px');
  env.window.scrollY = 0;
  env.events.get('pageshow')();
  env.flush();
  assert.equal(env.styles.get('--portrait-scale'), '1');
  env.cleanup();
});

test('static/reduced-motion mode has no scroll listener and restores cleanly', () => {
  const env = controllerHarness(false);
  assert.equal(env.events.size, 0);
  assert.equal(env.styles.size, 0);
  env.changeMode(true);
  assert.equal(env.root.dataset.heroMotion, 'active');
  env.events.get('scroll')();
  env.changeMode(false);
  assert.equal(env.frames.size, 0);
  assert.equal(env.styles.size, 0);
  assert.equal(env.events.size, 0);
  assert.equal(env.root.dataset.heroMotion, undefined);
  assert.ok(env.observers.every(observer => observer.targets.size === 0));
  env.cleanup();
  assert.equal(env.changes.size, 0);
});

test('unmount cancels queued work and removes listeners, observers and inline styles', () => {
  const env = controllerHarness();
  env.events.get('scroll')();
  env.cleanup();
  assert.equal(env.frames.size, 0);
  assert.equal(env.events.size, 0);
  assert.equal(env.styles.size, 0);
  assert.equal(env.changes.size, 0);
  assert.ok(env.observers.every(observer => observer.targets.size === 0));
});

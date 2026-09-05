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
const { getHeroFrame, clampProgress, HERO_TIMELINE, HERO_SCROLL_SCALE, CINEMATIC_MEDIA } = moduleExports;
const heroCss = fs.readFileSync(path.join(__dirname, '../app/globals.css'), 'utf8');
const scrollDistanceRatio = Number(heroCss.match(/--hero-scroll-distance-ratio:\s*([\d.]+)/)[1]);

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
  assert.equal(HERO_TIMELINE.finalPortraitScale, 0.58);
  assert.ok(Math.abs(centered.portraitScale - HERO_TIMELINE.finalPortraitScale) < 1e-10);
  assert.equal(centered.portraitOpacity, 1);
  assert.equal(centered.signatureOpacity, 0);
  assert.equal(centered.introOpacity, 0);
});

test('portrait holds fully visible at the larger center scale before fading', () => {
  const start = HERO_TIMELINE.center[1];
  const end = HERO_TIMELINE.portraitFade[0];
  assert.ok(Math.abs((end - start) * HERO_SCROLL_SCALE - 0.12) < 1e-10);
  for (let step = 0; step <= 20; step++) {
    const frame = getHeroFrame(start + (end - start) * step / 20);
    assert.equal(frame.center, 1);
    assert.ok(Math.abs(frame.portraitScale - HERO_TIMELINE.finalPortraitScale) < 1e-10);
    assert.equal(frame.portraitOpacity, 1);
    assert.equal(frame.signatureOpacity, 0);
    assert.equal(frame.signatureDraw, 0);
  }
});

test('portrait fades smoothly at center before the signature becomes visible', () => {
  const [start, end] = HERO_TIMELINE.portraitFade;
  assert.equal(HERO_TIMELINE.signatureReveal[0], end);
  const midpoint = getHeroFrame((start + end) / 2);
  assert.ok(Math.abs(midpoint.portraitOpacity - 0.5) < 1e-10);
  for (let step = 0; step <= 1000; step++) {
    const progress = step / 1000;
    const frame = getHeroFrame(progress);
    if (frame.portraitOpacity > 0) {
      assert.equal(frame.signatureOpacity, 0);
      assert.equal(frame.signatureDraw, 0);
    }
    if (progress >= HERO_TIMELINE.center[1]) {
      assert.equal(frame.center, 1);
      assert.ok(Math.abs(frame.portraitScale - HERO_TIMELINE.finalPortraitScale) < 1e-10);
    }
    if (frame.signatureOpacity > 0) assert.equal(frame.portraitOpacity, 0);
  }
  assert.equal(getHeroFrame(end).portraitOpacity, 0);
});

test('final signature is fully visible and holds before the scene exits', () => {
  const frame = getHeroFrame(1);
  assert.equal(frame.portraitOpacity, 0);
  assert.equal(frame.introOpacity, 0);
  assert.equal(frame.signatureOpacity, 1);
  assert.equal(frame.signatureScale, 1);
  assert.equal(frame.signatureDraw, 1);
  assert.equal(getHeroFrame(HERO_TIMELINE.signatureDraw[1]).signatureDraw, 1);
  assert.equal(getHeroFrame(0.99).signatureDraw, 1);
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
  assert.ok(css.includes(`height: calc(100svh + 160svh * ${HERO_SCROLL_SCALE} * var(--hero-scroll-distance-ratio) - 88px)`));
  assert.ok(css.includes('clip-path: inset(0 calc((1 - var(--signature-draw, 0)) * 100%) 0 0)'));
});

test('real signature reveal continues progressively after the opacity fade finishes', () => {
  assert.equal(getHeroFrame(HERO_TIMELINE.signatureDraw[0]).signatureDraw, 0);
  const midpoint = getHeroFrame((HERO_TIMELINE.signatureDraw[0] + HERO_TIMELINE.signatureDraw[1]) / 2);
  assert.equal(midpoint.signatureOpacity, 1);
  assert.ok(Math.abs(midpoint.signatureDraw - 0.5) < 1e-10);
  assert.ok(getHeroFrame(0.98 / HERO_SCROLL_SCALE).signatureDraw < 1, 'Ink is still revealing at the previous scroll completion point');
  assert.equal(getHeroFrame(HERO_TIMELINE.signatureDraw[1]).signatureDraw, 1);
});

test('later signature handoff preserves reference drawing, fade, lead-in, and final-hold proportions', () => {
  const [start, end] = HERO_TIMELINE.signatureDraw;
  const [fadeStart, fadeEnd] = HERO_TIMELINE.signatureReveal;
  assert.ok(Math.abs(start * HERO_SCROLL_SCALE - 0.88) < 1e-10);
  assert.ok(Math.abs((fadeEnd - fadeStart) * HERO_SCROLL_SCALE - 0.20) < 1e-10);
  assert.ok(Math.abs((start - fadeStart) * HERO_SCROLL_SCALE - 0.08) < 1e-10);
  assert.ok(Math.abs((end - start) * HERO_SCROLL_SCALE / (0.98 - 0.62) - 1.2) < 1e-10);
  assert.ok(Math.abs((1 - end) * HERO_SCROLL_SCALE - 0.02) < 1e-10);
});

test('all stages retain their reference positions on the proportionally shortened track', () => {
  const intervals = {
    center: [0.08, 0.48], introFade: [0.06, 0.32],
    portraitFade: [0.60, 0.80], signatureReveal: [0.80, 1.00],
    signatureDraw: [0.88, 1.312],
  };
  for (const [name, expected] of Object.entries(intervals)) {
    HERO_TIMELINE[name].forEach((value, index) => {
      assert.ok(Math.abs(value * HERO_SCROLL_SCALE - expected[index]) < 1e-10, `${name}[${index}]`);
    });
  }
});

test('signature mask uses the provided asset at its original aspect ratio', () => {
  const css = fs.readFileSync(path.join(__dirname, '../app/globals.css'), 'utf8');
  const svg = fs.readFileSync(path.join(__dirname, '../public/signatures/leo-signature-traced.svg'), 'utf8');
  const viewBox = svg.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number);
  assert.ok(css.includes(`aspect-ratio: ${viewBox[2]} / ${viewBox[3]}`));
  assert.ok(css.includes('mask-image: url("/signatures/leo-signature-traced.svg")'));
  assert.ok(css.includes('mask-mode: alpha'));
  assert.ok(css.includes('mask-size: contain'));
  assert.ok(svg.includes('<path') && !svg.includes('<image'));
});

test('signature clipping is opt-in to the motion-enabled desktop scene', () => {
  const css = fs.readFileSync(path.join(__dirname, '../app/globals.css'), 'utf8');
  const baseRule = css.match(/\.leo-signature-ink\s*\{([^}]+)\}/)[1];
  assert.ok(!baseRule.includes('clip-path'), 'Static, reduced-motion and no-JS signature stays complete');
  const desktop = css.indexOf(`@media screen and ${CINEMATIC_MEDIA}`);
  const activeRule = css.indexOf('.cinematic-hero[data-hero-motion="active"] .leo-signature-ink');
  assert.ok(desktop >= 0 && activeRule > desktop);
  const component = fs.readFileSync(path.join(__dirname, '../components/hero/LeoSignature.tsx'), 'utf8');
  assert.ok(component.includes('aria-labelledby="leo-signature-label"'));
  assert.ok(component.includes('translationPair("cinematic", "signatureLabel")'));
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
    getBoundingClientRect: () => ({ top: 88 - window.scrollY, height: 712 + 1280 * HERO_SCROLL_SCALE * scrollDistanceRatio }),
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
  env.window.scrollY = 640 * scrollDistanceRatio;
  for (let i = 0; i < 20; i++) env.events.get('scroll')();
  assert.equal(env.frames.size, 1);
  env.flush();
  assert.equal(env.frames.size, 0);
  assert.ok(Math.abs(Number(env.styles.get('--hero-progress')) - 0.5 / HERO_SCROLL_SCALE) < 1e-10);
  assert.equal(env.styles.get('--portrait-x'), '-300px');
  assert.ok(Math.abs(Number(env.styles.get('--portrait-scale')) - HERO_TIMELINE.finalPortraitScale) < 1e-10);
  env.cleanup();
});

test('controller completes the same forward and reverse sequence with 90% of the scroll distance', () => {
  assert.equal(scrollDistanceRatio, 0.9);
  const env = controllerHarness();
  const previousDistance = 1280 * HERO_SCROLL_SCALE;
  const currentDistance = env.root.getBoundingClientRect().height - 712;
  assert.ok(Math.abs(currentDistance / previousDistance - 0.9) < 1e-10);
  const properties = {
    '--hero-progress': 'progress', '--portrait-scale': 'portraitScale',
    '--portrait-opacity': 'portraitOpacity', '--intro-opacity': 'introOpacity',
    '--signature-opacity': 'signatureOpacity', '--signature-scale': 'signatureScale',
    '--signature-draw': 'signatureDraw',
  };
  for (let step = 0; step <= 40; step++) {
    const progress = (step <= 20 ? step : 40 - step) / 20;
    env.window.scrollY = previousDistance * 0.9 * progress;
    env.events.get('scroll')();
    env.flush();
    const expected = getHeroFrame(progress);
    for (const [property, key] of Object.entries(properties)) {
      assert.ok(Math.abs(Number(env.styles.get(property)) - expected[key]) < 1e-10, property);
    }
  }
  env.cleanup();
});

test('controller initializes from restored scroll and remeasures on resize', () => {
  const env = controllerHarness(true, 1280 * HERO_SCROLL_SCALE * scrollDistanceRatio);
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

test('portrait uses the supplied optimized image with preloading and English/Chinese alt text', () => {
  const dictionaries = {};
  const dictionarySource = fs.readFileSync(path.join(__dirname, '../data/i18n.ts'), 'utf8');
  vm.runInNewContext(ts.transpileModule(dictionarySource, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 },
  }).outputText, {
    exports: dictionaries,
    require: name => {
      if (name === '@/lib/site') return { siteConfig: {} };
      throw new Error(`Unexpected dependency ${name}`);
    },
  });
  const portraitSource = fs.readFileSync(path.join(__dirname, '../components/hero/LeoPortrait.tsx'), 'utf8');
  const portrait = ts.transpileModule(portraitSource, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  for (const locale of ['en', 'zh']) {
    const exports = {};
    vm.runInNewContext(portrait, {
      exports,
      require: name => {
        if (name === 'next/image') return { default: 'NextImage' };
        if (name === './motion') return moduleExports;
        if (name === '@/components/LanguageProvider') return { useLanguage: () => ({ translations: dictionaries.translations[locale] }) };
        if (name === 'react/jsx-runtime') return { jsx: (type, props) => ({ type, props }) };
        throw new Error(`Unexpected dependency ${name}`);
      },
    });
    const wrapper = exports.default();
    assert.equal(wrapper.props.className, 'leo-portrait');
    const image = wrapper.props.children;
    assert.equal(image.type, 'NextImage');
    assert.equal(image.props.src, '/images/hero/leo-portrait.jpg');
    assert.equal(image.props.alt, dictionaries.translations[locale].cinematic.portraitAlt);
    assert.ok(image.props.alt.length > 10);
    assert.equal(image.props.fill, true);
    assert.equal(image.props.preload, true);
    assert.equal(image.props.unoptimized, undefined);
    assert.equal(image.props.onLoad, undefined, 'Image loading must not drive the motion timeline');
    assert.ok(image.props.sizes.startsWith(CINEMATIC_MEDIA));
    assert.ok(image.props.sizes.endsWith('240px, 280px'));
  }
  assert.notEqual(dictionaries.translations.en.cinematic.portraitAlt, dictionaries.translations.zh.cinematic.portraitAlt);
});

test('portrait retains the reserved 3:4 motion anchor and uses centered responsive cropping', () => {
  const css = fs.readFileSync(path.join(__dirname, '../app/globals.css'), 'utf8');
  assert.match(css.match(/\.hero-portrait-anchor\s*\{([^}]+)\}/)[1], /aspect-ratio: 3 \/ 4/);
  const frame = css.match(/\.leo-portrait\s*\{([^}]+)\}/g).join('');
  assert.match(frame, /position: relative/);
  assert.match(frame, /overflow: hidden/);
  const image = css.match(/\.leo-portrait-image\s*\{([^}]+)\}/)[1];
  assert.match(image, /object-fit: cover/);
  assert.match(image, /object-position: center/);
  const scene = fs.readFileSync(path.join(__dirname, '../components/hero/HeroScene.tsx'), 'utf8');
  assert.ok(scene.includes('className="hero-portrait-anchor" data-portrait-anchor'));
  assert.ok(scene.includes('<div className="hero-portrait"><LeoPortrait /></div>'));
  assert.ok(!scene.includes('PortraitPlaceholder') && !css.includes('.portrait-placeholder'));
});

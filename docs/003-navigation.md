# Leo Personal Website - Version 0.3

## Goal

Upgrade the website from a single homepage into a multi-page personal website.

The purpose of this version is to establish the basic website structure and improve code organization.

This version focuses on:

* Navigation system
* Page routing
* Reusable components
* Shared website layout

---

## Current Website Status

Completed:

Version 0.1:

* Created Next.js project
* Configured TypeScript
* Configured Tailwind CSS
* Website runs locally

Version 0.2:

* Created personal homepage
* Added personal introduction
* Added AI related interests

Current task:

Create the basic website framework.

---

## Website Structure Goal

The website should contain these pages:

```
/
Home

/projects
Projects

/blog
Blog

/about
About
```

---

# Requirements

## 1. Create Navigation Bar

Create a reusable Navbar component.

Location:

```
components/Navbar.tsx
```

The navigation bar should contain:

* Logo / Name:
  Leo Yangqi

Navigation links:

* Home
* Projects
* Blog
* About

Requirements:

* Use Next.js Link component.
* Support page navigation.
* Keep the design clean and minimal.
* Responsive layout.

---

## 2. Create Shared Layout

Use Next.js App Router layout system.

Modify:

```
app/layout.tsx
```

The layout should include:

```
Navbar

    Page Content

Footer
```

The Navbar and Footer should appear on every page.

---

## 3. Create New Pages

Create the following routes:

## Projects Page

Path:

```
/projects
```

Content:

Simple placeholder.

Example:

```
Projects

Coming soon...

AI Projects
Computer Vision
LLM
Cyber Security
```

---

## Blog Page

Path:

```
/blog
```

Content:

Simple placeholder.

Example:

```
Blog

Coming soon...

AI Notes
CS231n Notes
Research Notes
```

---

## About Page

Path:

```
/about
```

Content:

Introduce:

```
Leo Yangqi

AI Undergraduate Student
Zhejiang University
```

Include placeholders for:

* Education
* Skills
* Research Experience

---

# Code Organization Requirements

Organize components clearly.

Expected structure:

```
app/

├── layout.tsx
├── page.tsx

├── projects/
│   └── page.tsx

├── blog/
│   └── page.tsx

└── about/
    └── page.tsx



components/

├── Navbar.tsx
└── Footer.tsx
```

---

# Technical Requirements

Use:

* Next.js App Router
* TypeScript
* Tailwind CSS

Do not:

* Add unnecessary dependencies.
* Add complex UI libraries.
* Add database or backend.

Keep the code simple and easy to understand.

---

# Expected Result

After running:

```bash
npm run dev
```

The following URLs should work:

```
http://localhost:3000

http://localhost:3000/projects

http://localhost:3000/blog

http://localhost:3000/about
```

The website should have:

* A shared navigation bar.
* Multiple pages.
* Clean component structure.
* A foundation for future expansion.

---

# Future Plans

Future versions will add:

* Project showcase cards
* Blog system with Markdown
* Research notes
* CTF writeups
* Personal resume section

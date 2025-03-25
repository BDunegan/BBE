# BoarnetBusinessEnglish.com (Portfolio Example)

This repository contains the **front-end source code** for a the BBE website I designed and built as a **freelance developer**. My role was to architect a React-based site, implement internationalization, provide styling/UI design, and set up a client-side contact form.

## Overview

**BoarnetBusinessEnglish.com** is a **React single-page application** showcasing corporate and private English lessons. I handled:
1. Setting up routing and page structure (Home, About, Courses, Prices, etc.).
2. Styling the site using `styled-components`.
3. Integrating **i18n** for multilingual support (English/German).
4. Implementing a custom contact form backed by **EmailJS**.

---

## Key Responsibilities

1. **Front-End Architecture**: Chose React + TypeScript for scalability and maintainability.  
2. **SPA Navigation**: Implemented client-side routing with anchor-based sections for quick in-page navigation.  
3. **Responsive UI**: Ensured the design works across mobile, tablet, and desktop viewports.  
4. **Code Quality**: Organized components, applied code splitting where necessary, and maintained code readability.  
5. **Internationalization**: Leveraged i18n for bilingual support, including text placeholders and language toggle functionality.  
6. **Deployment Guidance**: Consulted on deploying the site to Vercel under a custom domain.

---

## Tech Stack & Tools

- **React 18+** & **TypeScript**
- **React Router DOM (v6)**
- **styled-components**
- **i18next** (for translations)
- **EmailJS** (contact form email service)
- **Vercel** (for hosting & domain management)

---

## Notable Features

1. **Responsive Layout**: Uses `flexbox` and `styled-components` to adapt to different screen sizes.  
2. **Collapsible Components** (in CorporateCourses): Expanding sections for deeper detail on specific industries.  
3. **Anchor-Based Navigation**: Navigation bar links to specific sections on the page (e.g., `#home`, `#contact`), though also paired with React Router for fallback routes.  
4. **Lightweight**: Focus on a minimal design with partial hydration, minimal dependencies, and local state logic.

---

## Contact Form / EmailJS

- The [Contact.tsx](./src/components/Contact.tsx) component integrates with [EmailJS](https://www.emailjs.com/) for sending emails without a dedicated backend.  
- Basic success/error feedback is provided using `alert`.  
- Note: For production readiness, recommended to add additional spam protection or serverless functions.

---

## Internationalization

- Configured using [i18n](https://www.i18next.com/).  
- Language can be toggled via a button in the `Header` component.  
- Currently set up for English and German, but easy to expand with more languages.  
- Translation resources stored in JSON or objects (not shown here, but imported within `i18n.ts`).

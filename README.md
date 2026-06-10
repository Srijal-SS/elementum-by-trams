# Elementum by Trams

A modern, responsive marketing/agency website built with React, TypeScript, and Vite. Elementum showcases a studio's brand, services, testimonials, and contact info with smooth animations and a polished UI.

## 📁 Project Structure

```
elementum-by-trams/
├── public/             # Static assets (icons, images)
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Navbar.tsx        # Sticky top navigation bar
│   │   ├── BottomNav.tsx     # Mobile bottom navigation bar
│   │   ├── Hero.tsx          # Landing hero section
│   │   ├── FeatureSplit.tsx  # Alternating image + text feature rows
│   │   ├── Offers.tsx        # Services / offers section
│   │   ├── Testimonials.tsx  # Client testimonials carousel
│   │   └── Footer.tsx        # Site footer
│   ├── App.tsx         # Root component — composes all sections
│   ├── main.tsx        # React entry point
│   ├── index.css       # Global styles & Tailwind directives
│   └── App.css         # Component-level base styles
├── index.html          # HTML shell
├── vite.config.ts      # Vite configuration
├── tailwind.config.*   # Tailwind CSS v4 config (via PostCSS)
├── tsconfig.json       # TypeScript base config
└── package.json        # Dependencies & scripts
```

---

## Tech Stack

### Core Framework

React
TypeScript
Vite

### Styling

Tailwind CSS
PostCSS

### Animation
Framer Motion

### Icons
Lucide React

### Linting & Code Quality
ESLint
typescript-eslint
eslint-plugin-react-hooks
eslint-plugin-react-refresh

---

## Features

- **Sticky Navbar** — Frosted-glass top bar with smooth entrance animation; logo links back to homepage
- **Mobile Bottom Nav** — Fixed bottom navigation for mobile with active state tracking
- **Hero Section** — Full-width landing area with bold headline and CTA
- **Feature Split Rows** — Alternating left/right image + text layout for storytelling
- **Offers Section** — Highlights core service offerings
- **Testimonials** — Client quotes with a polished card layout
- **Footer** — Brand info, social links, and site links
- **Framer Motion Animations** — Entrance animations on navbar and other key elements
- **Responsive Design** — Tailored layouts for mobile, tablet, and desktop


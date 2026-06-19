# Yash Koparde - Developer Portfolio

<p align="center">
  <a href="https://yk-projects.vercel.app">Live Demo</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-black?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Vite-Latest-black?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-black?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Framer-Motion-black?style=for-the-badge&logo=framer" />
</p>

A personal portfolio built with React, Tailwind CSS, and Framer Motion.

The project focuses on presentation, motion, and clarity. Instead of a traditional grid of projects, content is revealed through smooth scroll interactions, animated transitions, and a dark visual style inspired by modern entertainment platforms.
---

## Highlights

* Scroll-based project reveals
* Smooth project-to-modal transitions
* Responsive layouts across devices
* Fixed social navigation
* Custom dark and gold theme
* No backend required

---

## Built With

| Technology    | Purpose        |
| ------------- | -------------- |
| React         | UI Development |
| Vite          | Build Tool     |
| Tailwind CSS  | Styling        |
| Framer Motion | Animations     |
| Lucide React  | Icons          |

---

## Running Locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

---

## Customization

### Social Links

Edit the `SOCIAL_LINKS` array in:

```text
src/App.tsx
```

### Projects

Edit the `PROJECTS` array in:

```text
src/App.tsx
```

### Theme

Update the theme variables in:

```text
src/index.css
```

```css
@theme {
  --color-ink: #050505;
  --color-gold: #D4AF37;
}
```

---

## Repository Structure

```text
src
├── assets
├── components
├── App.tsx
├── main.tsx
└── index.css
```

---

## License

MIT

## ⚙️ Customization Guide

### 1. Update Social Links
To update the social media links in the top right corner, open `src/App.tsx` and locate the `SOCIAL_LINKS` array at the top of the file. Replace the `href` values (`"#"`) with your actual profile URLs.

```javascript
const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  // ...
];
```

### 2. Add or Modify Projects
To add or modify projects, open `src/App.tsx` and locate the `PROJECTS` array. You can copy and paste the following template into the array to add a new card:

```javascript
  {
    id: '05', // Sequential ID or project number
    title: 'Project Name',
    category: 'Project Category (e.g., Frontend Architecture)',
    poster: 'https://picsum.photos/seed/your-project/1920/1080', // High-res image URL
    year: '2026',
    tech: ['React', 'TypeScript', 'Tailwind'], // Array of technologies used
    synopsis: 'A brief, engaging description of what the project does.',
    challenges: 'What were the main technical hurdles?',
    outcomes: 'What was the final impact or result?',
    icon: Code2 // Lucide React icon component
  },
```

### 3. Theme Colors
The custom colors are defined in `src/index.css` using Tailwind's `@theme` directive. You can modify the `--color-ink` and `--color-gold` variables to change the overall aesthetic of the portfolio.

```css
@theme {
  --color-ink: #050505;
  --color-gold: #D4AF37;
}
```

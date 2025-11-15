# Louis Lenouvel - ePortfolio

A modern, bilingual (FR/EN) ePortfolio built with Astro, React, and Tailwind CSS. Deployed on GitHub Pages.

## Features

- Bilingual support (French/English)
- Responsive design
- Dark/Light theme support
- Fast static site generation with Astro
- Smooth animations and transitions
- Professional layout with sidebar navigation

## Tech Stack

- **Astro 5.0** - Static site generation
- **React 19** - Interactive components
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **GitHub Pages** - Hosting

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Start the development server:
\`\`\`bash
pnpm run dev
\`\`\`

4. Open http://localhost:3000 in your browser

## Building & Deployment

### Local Build
\`\`\`bash
pnpm run build
\`\`\`

### Deploy to GitHub Pages

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy

Or manually deploy:
\`\`\`bash
pnpm run deploy
\`\`\`

## Project Structure

\`\`\`
src/
├── components/
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── LanguageContext.tsx
│   └── Portfolio.tsx
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── globals.css
\`\`\`

## Customization

### Update Personal Info
Edit components to change:
- Name and titles in `Navigation.tsx` and `Hero.tsx`
- About text in `About.tsx`
- Projects in `Projects.tsx`
- Skills in `Skills.tsx`
- Contact info in `Contact.tsx`

### Styling
- Colors are defined in `src/styles/globals.css`
- Tailwind CSS configuration is in `tailwind.config.js`

## License

MIT

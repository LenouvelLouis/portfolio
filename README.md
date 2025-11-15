<div align="center">

# 🌙 Louis Lenouvel - ePortfolio

*A modern, bilingual ePortfolio built with Astro. Soft, elegant, and fast.*

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=flat-square&logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-333?style=flat-square&logo=github)](https://pages.github.com)

</div>

---

## ✨ Features

- **🌐 Bilingual Support** - Seamlessly switch between French and English
- **📱 Fully Responsive** - Beautiful on all devices
- **⚡ Lightning Fast** - Static site generation with Astro
- **🎨 Modern Design** - Soft colors and smooth animations
- **🔗 Project Showcase** - Display your work with GitHub links
- **💼 Professional Layout** - Sidebar navigation and organized sections

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Astro 5.0** | Static site generation framework |
| **React 19** | Interactive components |
| **Tailwind CSS 4** | Utility-first styling |
| **TypeScript** | Type-safe development |
| **Lucide React** | Beautiful icon library |
| **GitHub Pages** | Free hosting |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm, npm, or yarn

### Installation

1. **Clone and install**
   \`\`\`bash
   git clone https://github.com/LenouvelLouis/astro-eportfolio.git
   cd astro-eportfolio
   pnpm install
   \`\`\`

2. **Start development server**
   \`\`\`bash
   pnpm run dev
   \`\`\`

3. **Open in browser**
   - Navigate to `http://localhost:3000`
   - Start editing files in `src/` to see changes instantly

---

## 📦 Build & Deploy

### Local Build
\`\`\`bash
pnpm run build
\`\`\`

### Deploy to GitHub Pages

**Automatic (Recommended):**
- Push to the `main` branch
- GitHub Actions automatically builds and deploys

**Manual:**
\`\`\`bash
pnpm run deploy
\`\`\`

Your site will be live at: `https://LenouvelLouis.github.io`

---

## 📁 Project Structure

\`\`\`
src/
├── components/          # React interactive components
│   ├── Hero.tsx         # Hero section with language toggle
│   ├── Navigation.tsx    # Sidebar navigation
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Portfolio projects with GitHub links
│   ├── Skills.tsx       # Technical skills
│   ├── Contact.tsx      # Contact form
│   ├── LanguageContext.tsx  # Language state management
│   └── Portfolio.tsx    # Main layout component
├── layouts/
│   └── Layout.astro     # Base HTML layout
├── pages/
│   └── index.astro      # Homepage
├── styles/
│   └── globals.css      # Tailwind + custom styles
└── public/
    └── favicon.svg      # Site favicon
\`\`\`

---

## 🎨 Customization

### Update Your Info

**Personal Details:**
- Edit `src/components/Hero.tsx` - Name and title
- Edit `src/components/Navigation.tsx` - Navigation links

**Content Sections:**
- `src/components/About.tsx` - Your bio and background
- `src/components/Projects.tsx` - Your portfolio projects
- `src/components/Skills.tsx` - Your technical skills
- `src/components/Contact.tsx` - Contact information

### Styling

- **Colors:** Defined in `src/styles/globals.css` using CSS variables
- **Fonts:** Configured in Tailwind theme
- **Layout:** Tailwind CSS classes (modify breakpoints in `tailwind.config.ts`)

### Add Projects

In `src/components/Projects.tsx`, add your projects:

\`\`\`typescript
{
  title: "Project Name",
  description: "What this project does",
  tags: ["React", "Astro"],
  link: "https://project-link.com",
  github: "https://github.com/yourrepo/project"
}
\`\`\`

---

## 📝 Available Commands

\`\`\`bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm run preview  # Preview production build locally
pnpm run deploy   # Build and deploy to GitHub Pages
\`\`\`

---

## 🌍 Set Up GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** → **Build and deployment**
3. Set source to `GitHub Actions`
4. The workflow will run automatically on each push

---

## 📄 License

MIT - Feel free to use this for your own portfolio!

---

## 💡 Tips

- **Performance:** Astro pre-renders everything as static HTML = blazing fast load times
- **SEO:** All content is server-rendered for excellent search engine optimization
- **No JavaScript bloat:** Only interactive components use JavaScript
- **Easy updates:** Simply edit components and redeploy

---

<div align="center">

**Built with ❤️ using Astro**

[Portfolio](https://LenouvelLouis.github.io) • [GitHub](https://github.com/LenouvelLouis) • [LinkedIn](https://linkedin.com/in/louis-lenouvel)

</div>

# Louis Lenouvel · portfolio

Mon portfolio : [lenouvellouis.github.io/portfolio](https://lenouvellouis.github.io/portfolio/)

Chaque projet y est dessiné comme une ligne de métro, et chaque station comme une étape de son pipeline.

## Stack

- Astro (site statique) + React pour les parties interactives
- Tailwind CSS 4, polices Schibsted Grotesk et IBM Plex Mono
- Déploiement GitHub Pages via GitHub Actions à chaque push sur `main`

## Lancer en local

```bash
pnpm install
pnpm dev        # http://localhost:4321/portfolio/
pnpm build      # génère dist/
```

## Où modifier quoi

| Fichier | Contenu |
|---|---|
| `src/components/projectsData.ts` | projets (FR/EN), couleurs de ligne, tracés, stacks, archives |
| `src/components/Hero.tsx` | accroche et chiffres clés |
| `src/components/Board.tsx` | tableau des « prochains départs » |
| `src/components/About.tsx` | parcours |
| `src/components/Skills.tsx` | stack, reliée automatiquement aux projets |
| `src/components/Contact.tsx` | contact et pied de page |
| `src/styles/globals.css` | palette (clair et sombre) |
| `public/favicon.svg` | logo |

Pages projet : `#/projets/<slug>` (routage par hash, compatible GitHub Pages).

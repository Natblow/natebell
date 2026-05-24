# Nathan Bellow - Portfolio

A bilingual (EN/FR) personal portfolio built with Vue 3, Vite, TypeScript, and Tailwind CSS.

## Stack

- Vue 3 + Composition API
- Vite + TypeScript
- Tailwind CSS
- Vue I18n (English / French)
- Vue Router (`/` and `/fr`)
- @vueuse/motion for scroll animations
- Kamal 2 + nginx for production deployment

## Prerequisites

- Node.js 20+
- npm

## Development

```sh
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Use the language toggle in the navbar to switch between English and French.

## Build

```sh
npm run build
npm run preview
```

## Resume PDF

Add your CV to `public/resume.pdf`. The site links to it from the hero and navbar.

## Adding Projects Later

Edit `src/data/projects.ts` and add matching translation keys in `src/i18n/en.json` and `src/i18n/fr.json`:

```ts
export const projects: Project[] = [
  {
    id: 'my-project',
    titleKey: 'projects.myProject.title',
    descriptionKey: 'projects.myProject.description',
    url: 'https://example.com',
    repo: 'https://github.com/Natblow/my-project',
    tags: ['Vue', 'Rails'],
  },
]
```

## Kamal Deployment


1. Install Kamal: `gem install kamal`
2. Copy [`.env.example`](.env.example) to `.env` and set `KAMAL_SERVER_IP` to your Droplet IP
3. Point all four domains (A records) at that IP
4. Registry auth for `ghcr.io` — your token must include **`write:packages`**. If you use the GitHub CLI:

```sh
gh auth refresh -h github.com -s write:packages,read:packages,delete:packages
gh auth status   # should list write:packages in token scopes
cp .kamal/secrets.example .kamal/secrets
```

Or set `KAMAL_REGISTRY_PASSWORD` to a [classic PAT](https://github.com/settings/tokens) with `write:packages` and `read:packages`.

5. First-time setup and deploy:

```sh
kamal setup
kamal deploy
```

Subsequent deploys: `kamal deploy` from this directory only — hoondok is deployed separately from its own repo.

The Dockerfile builds the Vue app and serves it with nginx. No Ruby runtime is required on the server.

## Project Structure

```
src/
├── components/
│   ├── layout/       # NavBar, Footer
│   └── sections/     # Hero, Traits, Projects, Education, etc.
├── composables/      # useLocale
├── data/             # resume.ts, projects.ts
├── i18n/             # en.json, fr.json
├── router/
└── views/            # HomeView
```

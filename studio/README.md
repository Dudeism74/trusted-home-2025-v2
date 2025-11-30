Trusted Home Essentials — Sanity Studio
====================================

This is a minimal, read-only Sanity Studio scaffold intended for deployment under the `/studio` (or `/admin`) path.

Important notes:
- This is scaffolded manually; it does not run `sanity init` and has no CLI login. To deploy the Studio, configure a Vercel project for the repository.
- The Studio uses projectId `yvqbkua0` and dataset `production` (read-only). No project secret or token is included.
- The Studio disables document actions and provides a read-only view of documents.

Deployment instructions (manual):
1. Install dependencies inside `studio/`:

```bash
cd studio
npm install
```

2. Build the Studio (this outputs the static site):

```bash
npm run build
```

3. For Vercel, add a `vercel.json` in repo root that points to `studio/package.json` as a separate build. See the repo-level `vercel.json` for hints.

4. (Optional) Provide Sanity token in Vercel envs if read-only previews are required. Not required for public read access.

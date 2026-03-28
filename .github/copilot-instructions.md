# Copilot Instructions for SaunaMind

## Project Overview
- This is an Astro marketing site for SaunaMind.
- Keep the site fast, static-first, and easy to deploy.
- Primary files are in `src/pages` and shared styles live in `src/layouts/Layout.astro`.

## Stack and Conventions
- Framework: Astro
- Language: TypeScript where needed in Astro frontmatter or scripts
- Styling: CSS in Astro files (preserve current design language unless asked to redesign)
- Keep changes minimal and focused on the user request

## Routing and Pages
- Home page: `src/pages/index.astro`
- Privacy page: `src/pages/privacy.astro`
- Support page: `src/pages/support.astro`
- Use `import.meta.env.BASE_URL` for internal links

## UX and Content Rules
- Preserve sauna-science messaging and factual claims already present unless explicitly asked to change copy.
- Prioritize mobile responsiveness.
- Avoid heavy dependencies for simple UI changes.
- Keep forms and CTA flows working when editing layout or scripts.

## Editing Guidelines
- Do not remove existing sections unless requested.
- Reuse shared classes and avoid duplicate style systems.
- Keep scripts defensive and compatible with static rendering.
- Do not embed large base64 assets in page markup.

## Validation
- After edits, run:
  - `npm run build`
- Fix introduced errors before finishing.

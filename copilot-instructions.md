# Copilot Instructions for SaunaMind

This project uses Astro to power the SaunaMind marketing site.

## Do
- Keep edits small and aligned to the request.
- Use `import.meta.env.BASE_URL` for internal links.
- Preserve existing pages and route structure in `src/pages`.
- Keep mobile responsiveness and accessibility in mind.
- Run `npm run build` after code changes.
- For Copilot CLI login requests, run `copilot login` and provide the device code immediately.

## Do Not
- Introduce large new dependencies for simple UI changes.
- Break existing email capture and CTA flows.
- Duplicate style systems across files.
- Embed large base64 assets directly in page markup.

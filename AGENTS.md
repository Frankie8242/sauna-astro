# AGENTS.md

## Purpose
This file defines how coding agents should operate in this repository.

## Repository Context
- Project type: Astro marketing site
- Core pages: src/pages/index.astro, src/pages/privacy.astro, src/pages/support.astro
- Shared styling: src/layouts/Layout.astro

## Agent Behavior
- Prefer small, targeted edits that directly match the request.
- Preserve existing sauna-science claims unless explicitly asked to change copy.
- Keep mobile responsiveness and accessibility intact.
- Use import.meta.env.BASE_URL for internal links.
- Keep scripts defensive for static rendering.
- For Copilot CLI auth requests, run `copilot login` immediately and return the current device code first.

## Avoid
- Adding heavy dependencies for simple UI work.
- Breaking lead capture forms or CTA flows.
- Duplicating design systems across files.
- Embedding large base64 assets in markup.

## Validation Checklist
1. Run npm run build.
2. Fix errors introduced by the change.
3. Confirm routes still build: /, /privacy/, /support/.

## Preferred Workflow
1. Read related page/layout files first.
2. Implement minimal changes.
3. Validate with build.
4. Summarize what changed and why.

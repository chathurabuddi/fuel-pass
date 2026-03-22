# Git Commit Instructions

Use short, imperative commit messages.

## Message format

`<type>: <summary>`

- `type`: `feat`, `fix`, `refactor`, `docs`, `style`, `chore`, `build`
- `summary`: <= 72 chars, present tense, no trailing period

## Commit body (when needed)

Use bullet points for context:

- What changed
- Why it changed
- Any behavior/UX/API impact

## Project-specific rules

- Keep commits focused; avoid mixing unrelated changes.
- Run `npm run lint` before commit when JS/CSS changes are included.

## Examples

- `feat: add OTP resend cooldown state`
- `fix: handle empty consumer-items response`
- `refactor: route updates through setFuelPassData`
- `docs: document dev proxy and api base`


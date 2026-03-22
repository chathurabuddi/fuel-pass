# AGENTS.md

## What this app is
- `fuel-pass` is a Vite + Vanilla JS single-page app with a small screen-state router (`LOGIN` -> `VERIFY` -> `DASHBOARD`).
- The app is intentionally framework-free; UI is rendered by replacing `#content` HTML in component functions.
- Core entry flow is `index.html` -> `src/main.js` -> `src/components/Layout.js`.

## Architecture and data flow (read these first)
- `src/main.js` wires `state.onStateChange = () => render(contentEl, state)`; all meaningful UI updates come from state actions.
- `src/state/state.js` is the source of truth; use exported setters (`setScreen`, `setLoading`, `setError`, etc.), not direct `state.* = ...` mutations.
- Login flow: `renderLogin` (`src/components/Login.js`) -> `handleRequestOtp` (`src/api/auth.js`) -> `apiRequest('/otp/login/consumer')`.
- Verify flow: `renderVerify` -> `handleVerifyOtp` -> `setJwt` + `setScreen(DASHBOARD)`.
- Dashboard flow: `Layout.render` detects `state.jwt` without data, shows loading, then calls `fetchDetails` (`src/api/fuel.js`) and finally `renderDashboard`.
- API layer is centralized in `src/api/api.js`; auth header injection happens there when `auth=true`.

## Project-specific coding patterns
- Build markup with `html` from `src/utils/ui.js`; it sanitizes string interpolations by default.
- Only use `safe(...)` for trusted raw content (example: wallet SVG imports in `src/components/Dashboard.js`).
- If you inject new Lucide icons, ensure `updateLucideIcons()` is called after DOM updates (currently handled in `Layout.render`).
- Error UX is toast-driven: `setError()` in `state` also calls `showToast` (`src/utils/toast.js`).
- Mobile number handling is normalized: state stores number without leading `0`, verify request re-adds `0` before API call.
- Theme is persisted in `localStorage` (`fuel_pass_theme`) and applied through `data-theme` on `<html>`.

## External integrations and boundaries
- API base comes from `src/constants.js`: dev uses `/api`, prod uses `https://fuelpass.gov.lk/api`.
- Dev proxy is configured in `vite.config.js` (`/api` -> `https://fuelpass.gov.lk`) to avoid CORS issues.
- Default request headers are fixed in `HEADERS` (`src/constants.js`), including a specific `user-agent` value.
- Wallet buttons are a demo boundary (`src/utils/wallet.js`): they currently show info toasts and download QR, not real pass issuance.

## Developer workflows
- Install: `npm install`
- Run dev server (host exposed): `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Preview production build: `npm run preview`
- There is no real test suite yet (`npm test` intentionally exits with error).

## Change checklist for agents
- Adding a new screen requires updates in both `SCREENS` (`src/constants.js`) and route handling in `src/components/Layout.js`.
- New backend calls should go through `apiRequest` to keep error handling and auth behavior consistent.
- Persisted auth/theme/mobile keys are `fuel_pass_jwt`, `fuel_pass_theme`, `fuel_pass_mobile`; avoid introducing new keys without need.
- Keep styles token-based in `src/style.css` (`--background`, `--primary`, etc.) to preserve dark/light theming behavior.
- Keep `AGENTS.md` and `README.md` up to date whenever architecture, flows, commands, or integration behavior changes.


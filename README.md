# Playwright project

Scope: **ui** (UI / API folders under `tests/`).

```bash
npm install
npx playwright install   # browser binaries, already run once at project creation
npm test
```

| Task | Command |
| --- | --- |
| Run everything | `npx playwright test` |
| Watch the browser | `npx playwright test --headed` |
| One file | `npx playwright test tests/ui/smoke.spec.ts` |
| One test by title | `npx playwright test -g "home loads"` |
| One project | `npx playwright test --project=ui` |
| UI mode | `npx playwright test --ui` |
| Open last report | `npm run report` |

Base URL comes from `BASE_URL` (default `http://localhost:3000`). To start your app
automatically before tests, uncomment the `webServer` block in `playwright.config.ts`.

Allure results: `allure-results/` · Report: `npm run report:allure`

**Playwright E2E Automation Framework — Demo Webshop**

[![CI](https://github.com/aivaras-vilkas/demo_webshot_test/actions/workflows/playwright.yml/badge.svg)]()<br>
![Playwright](https://img.shields.io/badge/Playwright-latest-blue)<br>
![Node](https://img.shields.io/badge/node-18.x-green)<br>
![Last Commit](https://img.shields.io/github/last-commit/aivaras-vilkas/demo_webshot_test)<br>

A end‑to‑end UI automation framework built with Playwright and TypeScript.
The project includes Page Object Model architecture, custom fixtures, and a automated CI pipeline using GitHub Actions.

**Features:**<br>
Playwright + TypeScript for browser automation<br>
Page Object Model (POM) for clean separation of UI logic<br>
Reusable utilities for logging, test data, and configuration<br>
GitHub Actions CI/CD with snapshot updates and test execution<br>
HTML test reports automatically uploaded as artifacts<br>
Cross‑browser support (Chromium, Firefox, WebKit)<br>
Visual regression testing via Playwright snapshots<br>

**Project Structure:**
```
demo_webshot_test/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
│
├── tests/
│   ├── specs/
│   │   ├── homepage.spec.ts
│   │   ├── login.spec.ts
│   │   ├── cart.spec.ts
│   │   └── example.spec.ts
│   │
│   ├── pages/
│   │   ├── MainPage.ts
│   │   ├── LoginPage.ts
│   │   ├── CartPage.ts
│   │   └── BasePage.ts
│   │
│   ├── fixtures/
│   │   └── test-fixtures.ts
│   │
│   └── helpers/
│       ├── test-data.ts
│       └── utils.ts
│
└── utils/
    ├── env.ts
    └── logger.ts
```

**Tech stack:**<br>
Playwright — browser automation<br>
TypeScript — type‑safe test development<br>
Node.js — runtime<br>
GitHub Actions — CI/CD pipeline<br>

**Installation:**
```
git clone https://github.com/aivaras-vilkas/demo_webshot_test
cd demo_webshot_test
npm install
npx playwright install
```
Running tests:
Run the full test suite:
```
npx playwright test
```
Run tests in headed mode: 
```
npx playwright test --headed
```
Run tests in Plawright UI: 
```
npx playwright test --ui
```

**CI/CD pipeline - CI workflow is included in this project**<br>
1. Snapshots are taken and updated:<br>
a) Install required dependencies<br>
b) Updates Playwright snapshots<br>
c) Commits updated snapshots back to the repository<br>
2. Test Execution Job<br>
a) Runs the full test suite on Ubuntu<br>
b) Uploads Playwright HTML report as an artifact, test reporting on failure: trace, screenshot, video<br>

**Author:**
Aivaras Vilkas  
QA Engineer
LinkedIn:(https://www.linkedin.com/in/aivaras-vilkas/)

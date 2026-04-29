Playwright E2E Automation Framework — Demo Webshop

[![CI](https://github.com/aivaras-vilkas/demo_webshot_test/actions/workflows/playwright.yml/badge.svg)]()
![Playwright](https://img.shields.io/badge/Playwright-latest-blue)
![Node](https://img.shields.io/badge/node-18.x-green)
![Last Commit](https://img.shields.io/github/last-commit/aivaras-vilkas/demo_webshot_test)

A complete end‑to‑end UI automation framework built with Playwright and TypeScript...


A end‑to‑end UI automation framework built with Playwright and TypeScript.
The project includes Page Object Model architecture, custom fixtures, and a automated CI pipeline using GitHub Actions.

Features:
Playwright + TypeScript for browser automation
Page Object Model (POM) for clean separation of UI logic
Reusable utilities for logging, test data, and configuration
GitHub Actions CI/CD with snapshot updates and test execution
HTML test reports automatically uploaded as artifacts
Cross‑browser support (Chromium, Firefox, WebKit)
Visual regression testing via Playwright snapshots

Project Structure:

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

Tech stack:
Playwright — browser automation
TypeScript — type‑safe test development
Node.js — runtime
GitHub Actions — CI/CD pipeline

Installation:
1. git clone https://github.com/aivaras-vilkas/demo_webshot_test
cd demo_webshot_test
2. npm install
3. npx playwright install

Running tests:
Run the full test suite: npx playwright test
Run tests in headed mode: npx playwright test --headed
Run tests in Plawright UI: npx playwright test --ui

CI/CD pipeline - CI workflow is included in this project
1. Snapshots are taken and updated:
a) Install required dependencies
b) Updates Playwright snapshots
c) Commits updated snapshots back to the repository
2. Test Execution Job
a) Runs the full test suite on Ubuntu
b) Uploads Playwright HTML report as an artifact, test reporting on failure: trace, screenshot, video

Author:
Aivaras Vilkas  
QA Engineer
LinkedIn:(https://www.linkedin.com/in/aivaras-vilkas/)

# Playwright UI Automation Framework (TypeScript)

This project is a **UI automation framework built with Playwright and TypeScript**, designed to demonstrate modern QA automation practices used by remote-first engineering teams.

The framework focuses on **reliable, maintainable end-to-end UI testing**, following industry best practices such as the **Page Object Model (POM)** and automated execution in a **CI pipeline**.

---

## Project Overview

* Automates core authentication workflows for the SauceDemo sample application
* Covers both **positive and negative login scenarios**
* Uses Playwright’s built-in synchronization to eliminate flaky waits
* Structured for readability, scalability, and long-term maintenance

This repository is intended as a **portfolio project** showcasing real-world QA automation skills.

---

## Test Coverage

Current automated scenarios include:

* Successful login with valid credentials
* Error handling and validation for invalid login attempts
* Post-login navigation verification

Tests are written to validate **user-visible behavior**, not internal implementation details.

---

## Project Structure

```
playwright-ts-automation/
├── pages/              # Page Object classes
│   └── login.page.ts
├── tests/              # Test specifications
│   └── login.spec.ts
├── .github/workflows/  # CI pipeline configuration
│   └── playwright.yml
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

---

## Tech Stack

* **Playwright** – UI automation framework
* **TypeScript** – Strongly typed test development
* **Node.js** – Runtime environment
* **GitHub Actions** – Continuous Integration

---

## Running the Tests Locally

### Install dependencies

```bash
npm install
```

### Run tests (headless)

```bash
npx playwright test
```

### Run tests with visible browser

```bash
npx playwright test --headed
```

### Open the Playwright HTML report

```bash
npx playwright show-report
```

---

## Continuous Integration

Tests are automatically executed using **GitHub Actions** on every push and pull request to the `main` branch. The pipeline runs Playwright tests in headless mode to ensure fast and reliable feedback.

---

## Purpose

This project demonstrates:

* Practical experience with **Playwright + TypeScript**
* Understanding of **UI test design and negative testing**
* Use of **Page Object Model** for maintainability
* CI/CD integration for automated test execution

It is not intended to be a full test suite, but a **clear, focused example of professional QA automation practices**.

---

## Notes

* Credentials and URLs are intentionally hardcoded for demonstration purposes
* SauceDemo is a publicly available test application used for automation practice

---

Feel free to explore the code structure and test implementations.

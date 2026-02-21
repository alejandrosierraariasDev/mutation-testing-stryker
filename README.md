# 🧪 Mutation Testing with Stryker and Jest

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Stryker](https://img.shields.io/badge/Stryker-8F00FF?style=for-the-badge&logo=stryker-mutator&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

## What Stryker Gives You

Having a high code coverage percentage only tells you that your tests are running. It doesn't guarantee they are good. A test can pass but be completely useless because it doesn't validate the business logic.

Stryker helps you detect these useless tests. It works as follows:
- Introduces small "errors" or mutants in your source code (for example, changes a `&&` to an `||` or a `>` to a `>=`).
- Runs your unit tests against this mutated code.
- If a test fails, it means it detected the error and the mutant is killed (good! ✅).
- If the test still passes, it means it didn't detect the error. The mutant survives, revealing a weakness in your test suite.

### Why it's vital for modern development

Modern front-end technologies, with their reactive nature and state management, are prone to subtle errors. Stryker forces you to write tests that not only cover lines of code but also validate their behavior and logic.

In summary, using Stryker allows you to:
- Evaluate the quality of your tests, not just the quantity.
- Find edge cases that your tests didn't cover.
- Improve the robustness of your code base, reducing the risk of regressions.

Stryker is the tool that transforms your tests from a simple "passed/failed" list into a powerful tool to ensure the real quality of your software. It's the difference between having a security system and knowing that security system actually works. 🛡️

---

This project demonstrates how to implement mutation testing in TypeScript using Stryker, Jest, and Vue.js. Mutation testing is an advanced technique that helps improve the quality of your tests by introducing small changes (mutations) in your code and verifying if your tests can detect these changes.

## 📋 Features

- Complete Stryker configuration with Jest and TypeScript
- Practical examples of mutation testing
- Support for multiple frameworks: React, Angular, and Vue.js
- React and Vue.js components with unit tests
- Services with testable business logic
- Detailed HTML report generation
- Optimized Babel, TypeScript, and Jest configuration for testing
- Support for JSX/TSX in React
- TypeScript configuration ready for React and Vue

## 🏗️ Project Structure

```
src/
├── angular/             # Angular-specific code
│   └── services/        # Angular services
│
├── js/                  # Pure JavaScript utilities
│   └── utils/           # Shared utility functions
│
├── react/               # React-specific logic
│   └── services/        # Services for React components
│
└── vue/                 # Vue.js components and logic
    └── components/      # Reusable Vue components
```

## 📂 Test Structure

Tests follow the convention of being next to the code they test:
- `*.test.js` for JavaScript tests
- `*.test.ts` for TypeScript tests
- `*.spec.ts` for Angular tests
- `__tests__/` for grouping related tests

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)
- TypeScript (v4.9 or higher)

### Installation

Install the dependencies:
   ```
   npm install
   ```

## 🧪 Useful Commands

- **Run unit tests**:
  ```
  npm test
  ```

- **Run tests with coverage**:
  ```
  npm run test:coverage
  ```

- **Run mutation tests with Stryker**:
  ```
  npx stryker run
  ```

- **Run tests in watch mode**:
  ```
  npm run test:watch
  ```

- **Run mutation tests with Stryker**:
  ```
  npm run stryker
  ```
  This will generate a detailed report in `reports/mutation/mutation.html`

## 🔧 Configuration

### Babel (babel.config.js)
Configuration to support the latest JavaScript features:
- `@babel/preset-env` for compatibility with current Node.js
- Plugins for class features
- Optimized for testing

### Stryker (stryker.conf.json)
- Uses Jest as test runner
- Generates detailed HTML reports
- Per-test coverage analysis
- Performance-optimized configuration

## 📊 Understanding the Results

After running mutation tests:
1. **Mutation score**: Percentage of detected mutations
2. **Surviving mutants**: Changes that were not detected by tests
3. **Code coverage**: Areas of code that need more tests

### Stryker (stryker.conf.json)
- Uses Jest as test runner
- Generates detailed HTML reports
- Per-test coverage analysis
- Performance-optimized configuration

## 🔍 Stryker Configuration

### Quality Thresholds

The [stryker.conf.json](cci:7://file:///home/alex/WebstormProjects/mutation-testing-stryker/stryker.conf.json:0:0-0:0) file includes quality thresholds that ensure the code meets project standards:

```json
"thresholds": {
  "high": 90,    // Green - Excellent quality
  "low": 75,     // Yellow - Acceptable quality
  "break": 75    // If score is < 75%, command fails
}
```

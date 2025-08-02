# End-to-end Automated Tests

End-to-end automated tests using Playwright and TypeScript for the demo web app hosted at [http://localhost:3100](http://localhost:3100).

---

## 📦 Technologies Used
- TypeScript
- Playwright
- Jest-style assertions
- Docker for test execution
- Cross-browser support (Chromium, Firefox, WebKit)

---
## 🐳 Docker Setup

1. Pull the demo app Docker image:

```bash
docker pull automaticbytes/demo-app

2. Run the demo app:

docker run -p 3100:3100 automaticbytes/demo-app

This will expose the app at: http://localhost:3100

🚀 Getting Started
Clone the repository

git clone https://github.com/Nataliia2021/home-test-automation-solution.git
cd home-test-automation-solution

2. Install dependencies
npm install

3. Run Playwright tests
npm run test

---

🐳 Run Tests in Docker

1. Build the Docker image:

docker build -t playwright-tests .

Run tests inside the container:

npm run docker:test

---

🧪 Test Scenarios Covered
Login
Success: Valid credentials show welcome message

Failure A: Invalid credentials show error

Failure B: Blank username/password shows error

Checkout
Order Success: Fill form, submit, assert order number

Alert: Uncheck address checkbox, submit, handle alert

Cart
Total Calculation: Verify product sum equals shown total

Grid
Item Detail: 7th item is "Super Pepperoni", priced $10

All Items: Non-empty title, price, image, and button

Search
Success: Search word returns expected result

Empty: Blank search returns warning message



Folder Structure

├── Dockerfile
├── README.md
├── helpers
├── package-lock.json
├── package.json
├── playwright-report
│   └── index.html
├── playwright.config.ts
├── test-results
├── tests
│   ├── cart-total.spec.ts
│   ├── checkout-success.spec.ts
│   ├── grid-All-items.spec.ts
│   ├── grid-item.spec.ts
│   ├── login-failure-blank.spec.ts
│   ├── login-failure.spec.ts
│   ├── login.spec.ts
│   ├── search-empty.spec.ts
│   ├── search.spec.ts
│   └── selectors
│       └── formSelectors.ts
└── tsconfig.json
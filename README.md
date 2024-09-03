# Koinx Backend Intern Assignment

### API Endpoints

#### Fetch User Transactions
- Endpoint: 
```
GET /api/transactions/:address
```
- Description: Fetches and stores the transactions of a user by their Ethereum address.
- Input: address (string): The Ethereum address of the user.
- Output: JSON object containing the list of transactions for the given address.

#### Get User Expense and Current Ether Price
- Endpoint: 
```
GET /api/user/expense/:address
```
- Description: Returns the total expenses for a user's Ethereum address and the current price of Ethereum.

- Input: address (string): The Ethereum address of the user.
- Output: JSON object containing the total expenses and the current price of Ethereum

### Tech Stacks Used

1. Node.js: JavaScript runtime environment.
2. TypeScript: A statically typed superset of JavaScript.
3. Express: A minimal and flexible Node.js web application framework.
4. Redis: In-memory data structure store, used as a database, cache, and message broker.
5. MongoDB with Mongoose: NoSQL database with an object data modeling (ODM) library.
6. Axios: Promise-based HTTP client for making requests.
7. Node-cron: Cron-like job scheduler for Node.js.
9. Cross-env: Allows environment variables to be set across platforms.
10. Husky: Git hooks that let you run scripts for better commit quality.
11. ESLint: Linting utility for JavaScript and TypeScript.
12. Prettier: Code formatter to enforce consistent style.
13. Chalk: Terminal string styling library.
14. Moment.js: A library for parsing, validating, manipulating, and
displaying dates and times in JavaScript.

### Scripts

#### To Install Dependensies

```
npm install
```

#### To Run in Development Mode

```
npm run dev
```

#### To Build The Application

```
npm run build
```

#### To Run in Production Mode (After Build)

```
npm start
```
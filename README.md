# Fun with Express API

Oh no! This API is broken! Find and fix the issues to gain some fluency with Express. This project is a good project to use to assess an entry-level React developer's fluency in the hiring pipeline. 

Read through the instructions for more guidance. 

---

## About

This basic API is based on the [Express Api Starter Template](https://github.com/w3cj/express-api-starter)

This API allows a user to see cute animals, cute plants, and cute houses. A user _should_ be able to visit `/api/v1` and then the corresponding route to see these items. For example `http://localhost:3000/api/v1/cute-animals` should give a list of cute animals. HOWEVER, this app is broken and it's your job to fix it!

---

## Setup

- Clone down repository
- Run `npm i` or `npm install`
- Run `npm run dev` to start a development server
- Test with `npm run test`

---

## Instructions

You may use the provded tests to guide your development. You'll know if you've completed the tasks below if all of your tests pass! These tests might not look like tests you've used in the past - use your knowledge of other kinds of testing to figure them out. 

You'll need to find and fix the following bugs. Once you're done, add a couple of new features! The bugs may be incorrect syntax, mis-spelled words, messed up variables/values/imports, etc. 

- **BUGS:** 
  - The app doesn't run. figure out why!
  - A user should be able to see cute animals at the endpoint `/api/v1/cute-animals`, but it isn't working. Figure out why!
  - The plants endpoint isn't working. When the user vists the endpoint `/api/v1/cute-plants`, they should get a list of all cute plants, but it's returning animals! Figure out why.

- **NEW FEATURES**
  - Add the ability to get houses. Right now the endpoint `/api/v1/cute-houses` doesn't do anything. 
  - (ADVANCED) Add the ability to get sorted plants. The user should be able to visit `/api/v1/cute-plants?orderby=cuteness_rating` so that it returns sorted plants instead of just all the plants in random order. Consider researching how to handle query parameters in Node/Express.

If you want to continue to learn, add functionality to Create new animals, plants, and houses, Update animals, plants, and houses, and Delete animals, plants, and houses. These items are not currently included in the tests. 
 
---

## Lint

```
npm run lint
```

## Test

```
npm test
```

## Development

```
npm run dev
```

---

## About this application:

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
* [cors](https://www.npmjs.com/package/cors)
  * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [jest](https://www.npmjs.com/package/jest)
  * Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.


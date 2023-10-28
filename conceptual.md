### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

Promises, Callbacks, and Async/Await.

- What is a Promise?

promise is an object representing the eventual completion or failure of an asynchronous operation. 

- What are the differences between an async function and a regular function?

regular functions are synchronous and execute sequentially, while async functions allow more structured handling of asynchronous tasks. Async functions leverage Promises and the await keyword.

- What is the difference between Node.js and Express.js?

Node.js is a runtime that allows JavaScript to run on the server. It provides low-level capabilities for handling I/O and server operations.
Express.js is a web application framework for Node.js. It builds on Node.js and simplifies web application development by providing a structure for routing, middleware, and other web-specific tasks.

- What is the error-first callback pattern?


The error-first callback pattern, also known as the Node.js callback pattern, is a convention used in Node.js and JavaScript to handle asynchronous operations. It's a pattern where callback functions are used to report the results of an asynchronous operation, and these callback functions take two arguments: an error object (if an error occurred) and the result data (if the operation was successful).

- What is middleware?

Middleware is often associated with web frameworks like Express.js (for Node.js) and Django (for Python). Middleware refers to functions or modules that sit between the incoming web request and the final route handler (or endpoint) in a web application. They can intercept, process, modify, or enhance the request and response objects as they flow through the application.

- What does the `next` function do?

one calls next to move to the next middleware

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
1: It's more efficient to make these requests concurrently to reduce the time it takes to fetch data.

2: There's a lot of repetition in the code for making similar requests

3:The variable names elie, joel, and matt aren't very descriptive.


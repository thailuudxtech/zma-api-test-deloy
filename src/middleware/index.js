// middleware/index.js
const authenticationMiddleware = require('./authenticationMiddleware');
const loggingMiddleware = require('./loggingMiddleware');

module.exports = {
  authenticationMiddleware,
  loggingMiddleware,
};

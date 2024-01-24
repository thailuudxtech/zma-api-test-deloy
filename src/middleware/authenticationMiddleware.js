function authenticationMiddleware(req, res, next) {
    // Your authentication logic here
    // If authentication fails, you can respond with an error
    // If authentication is successful, call next() to pass control to the next middleware
    next();
  }
  
  module.exports = authenticationMiddleware;
  
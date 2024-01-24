module.exports = function handleError(err, req, res, next) {
  console.error("Error:", err.code);

  if (!err) {
      return next();
  }

  const statusCode = err.statusCode || 500; // Sử dụng 500 nếu không có statusCode
  const errorMessage = err.code || "Internal Server Error"; // Sử dụng tin nhắn mặc định nếu không có tin nhắn

  res.status(statusCode).json({
      message: errorMessage,
      errors: err.field || null,
  });
};

  
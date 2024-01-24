
require('dotenv').config();
const express = require('express');
const config = require('../config/config');
const middleware = require('./middleware');
const route = require("./routes/index.js");
const cors = require('cors');
const bodyParser = require('body-parser');
const handleError = require("./middleware/handleError");


const app = express();

// Sử dụng Cors middleware để xử lý CORS headers
app.use(cors({
  exposedHeaders: ["Authorization", "authorization"]
}));

// Sử dụng body-parser để xử lý dữ liệu từ client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);

// Middleware bắt lỗi
app.use(handleError);

// Áp dụng middleware
app.use(middleware.authenticationMiddleware);
app.use(middleware.loggingMiddleware);



// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Đang kết nối tới http://localhost:${PORT}`);
});

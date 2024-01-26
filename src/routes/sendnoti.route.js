// routes/apiRoutes.js
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Add this line to handle CORS

const sendnotiRouter = express.Router();

const apiKey = "uVQTEjD0wHhby80uqqBZ7VxsZZpBG-mP-F-1E3Gr0uLQ4TD3yXy"
const miniAppId = "2929941295009952945"

const url = "https://openapi.mini.zalo.me/notification/template";

sendnotiRouter.use(cors()); // Enable CORS for all routes

sendnotiRouter.post('/', async (req, res) => {
  try {
    const { orderNumber, receiverId } = req.body;
    console.log("Kiểm tra:", orderNumber);
    const headers = {
      "X-Api-Key": `Bearer ${apiKey}`,
      "X-User-Id": receiverId,
      "X-MiniApp-Id": miniAppId,
      "Content-Type": "application/json"
    };
    const data = {
      templateId: "00126fd75392bacce383",
      templateData: {
        buttonText: "Xem chi tiết đơn hàng",
        buttonUrl: "https://zalo.me/s/194839900003483517/",
        title: "ZaUI Coffee - Xác nhận đơn hàng",
        contentTitle: "Xác nhận đơn hàng",
        contentDescription: "Chúng tôi đã nhận yêu cầu đặt hàng từ bạn. Thông tin chi tiết đơn hàng"
      }
    };

    const response = await axios.post(url, data, { headers });
    console.log(response.data);
    res.json({ success: true, message: "Notification sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send notification" });
  }
});

module.exports = sendnotiRouter;
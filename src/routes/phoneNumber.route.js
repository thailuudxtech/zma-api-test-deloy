const express = require('express');
const request = require("request");

const phoneNumberRouter = express.Router();

phoneNumberRouter.post('/', async (req, res) => {
  try {

    const userAccessToken = req.body.accessToken;
    const token = req.body.token;
    const endpoint = 'https://graph.zalo.me/v2.0/me/info';
    const secretKey = 'Q6EX64TCVpLF687uEVKV';
    const options = {
      url: endpoint,
      headers: {
        access_token: userAccessToken,
        code: token,
        secret_key: secretKey,
      },
    };

    request(options, (error, response, body) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Response Code:", response.statusCode);
        console.log("Response Body:", body);
        res.status(response.statusCode).send(body);
      }
    });

  } catch (error) {
    console.error('Error getting phone number:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = phoneNumberRouter;

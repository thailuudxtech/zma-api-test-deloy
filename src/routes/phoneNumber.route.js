const express = require('express');
const axios = require('axios');
const request = require("request");


const phoneNumberRouter = express.Router();

phoneNumberRouter.post('/', async (req, res) => {
  try {
  
    const userAccessToken = req.body;
    
    console.log(1111111,userAccessToken);
    console.log(9999999);
    const endpoint = 'https://graph.zalo.me/v2.0/me/info';
    const token = "100";
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
      }
    });

  } catch (error) {
    console.error('Error getting phone number:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = phoneNumberRouter;

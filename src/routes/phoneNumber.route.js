const express = require('express');
const axios = require('axios');
const request = require("request");


const phoneNumberRouter = express.Router();

phoneNumberRouter.post('/', async (req, res) => {
  try {
  
    const userAccessToken = req.body;
    const endpoint = 'https://graph.zalo.me/v2.0/me/info';
    const token = '23.02.01';
    const secretKey = 'Q6EX64TCVpLF687uEVKV';

    // const params = {
    //   access_token: userAccessToken,
    //   code: token,
    //   secret_key: secretKey,
    // };
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
    // const response = await axios.get(endpoint, { params: params });

    // console.log('Response Code:', response.status);
    // console.log('Response Body:', response);

    // const data = response.data;
    // const phoneNumber = data.phone || 'Phone number not available';

    // res.json({ phoneNumber });
  } catch (error) {
    console.error('Error getting phone number:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = phoneNumberRouter;

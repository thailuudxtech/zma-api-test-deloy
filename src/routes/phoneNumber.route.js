const express = require('express');
const axios = require('axios');
const request = require("request");


const phoneNumberRouter = express.Router();

phoneNumberRouter.post('/', async (req, res) => {
  try {
  
    const userAccessToken = "yKH03xpWOIlmGKaDj-5WAln6JmYt-nzYlWnbDuBUFrN99rOAczC4Kzq2Mo35mmDW-IPL1hBp27BzLtCEklGuHRS2TWxbvJmew0vaVUEjC2dRL1zymh1DA-La95lLetmwp60FIVMRBm7DEMLPtjWo7la9U6Zig38rgmjq5v-gFpA13byGkCq0IArgBns4a7vbaJCr1O_7VM-5CnKgWvSrSufgLWMHdWTDsZrBFSxO6N3o57SDtR5RVDiF6rhcrZG5mJyLPlVXFH_B4sTNvzWe2xKjIogGXoTplMTfDeQE4tsNNsSOc9izFgrf4bxXjsmVzr4_PBYsO2IIOHO3Wxve8xzt9WdsWdfJvICo8_lJJKBnCMTclfPEBM5_anaIklbeB0";
    console.log(1111111,userAccessToken);
    console.log(9999999);
    const endpoint = 'https://graph.zalo.me/v2.0/me/info';
    const token = '100';
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

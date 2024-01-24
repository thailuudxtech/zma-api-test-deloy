const express = require('express');
const axios = require('axios');

const phoneNumberRouter = express.Router();

phoneNumberRouter.post('/', async (req, res) => {
  try {
    const { userAccessToken } = req;

    console.log(999999,userAccessToken);

    const endpoint = 'https://graph.zalo.me/v2.0/me/info';
    const token = '2929941295009952945';
    const secretKey = 'jylgDFQihnwppVSszgwb6QZB-JBkhwGUhyltFJOnS5Hh6_Qlj1i';

    const params = {
      access_token: userAccessToken,
      code: token,
      secret_key: secretKey,
    };

    const response = await axios.get(endpoint, { params: params });

    console.log('Response Code:', response.status);
    console.log('Response Body:', response.data);

    const data = response.data;
    const phoneNumber = data.phone || 'Phone number not available';

    res.json({ phoneNumber });
  } catch (error) {
    console.error('Error getting phone number:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = phoneNumberRouter;

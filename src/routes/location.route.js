const express = require('express');
const axios = require('axios');

const locationRouter = express.Router();

locationRouter.post('/', async (req, res) => {
  try {
    const { userId } = req.body;
    const response = await axios.post('https://openapi.zalo.me/v2/oa/getlocation', {
      user_id: userId,
    });

    const location = response.data.data;

    res.json({ location });
  } catch (error) {
    console.error('Error getting location:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = locationRouter;

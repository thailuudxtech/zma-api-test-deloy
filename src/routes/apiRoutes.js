
const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const username = process.env.SAPO_API_USERNAME;
    const password = process.env.SAPO_API_PASSWORD;

    if (!username || !password) {
      throw new Error('Missing SAPo API username or password');
    }

    const response = await axios.get('https://dx-tech.mysapo.net/admin/products.json', {
      auth: {
        username,
        password,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error calling products API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/cards', async (req, res) => {
  try {
    const username = process.env.SAPO_API_USERNAME;
    const password = process.env.SAPO_API_PASSWORD;

    if (!username || !password) {
      throw new Error('Missing SAPo API username or password');
    }

    const response = await axios.get('https://dx-tech.mysapo.net/admin/cards.json', {
      auth: {
        username,
        password,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error calling cards API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;

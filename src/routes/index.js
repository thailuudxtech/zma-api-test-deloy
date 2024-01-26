// const express = require('express');
// const apiRoutes = require('./apiRoutes');

// const router = express.Router();

// router.use('/api', apiRoutes);

// module.exports = router;

const { Router } = require('express');
const router = Router();
const productsRouter = require('../routes/products.route');
const customersRouter = require('../routes/customers.route');
const customerAddressesRouter = require('../routes/customerAddresses.route');
const getlocation = require('../routes/location.route');
const getPhoneNumber = require('../routes/phoneNumber.route');
const sendnotiRouter = require('../routes/sendnoti.route');



// Xuất router để sử dụng trong ứng dụng chính
module.exports = function route(app) {

    app.use('/api/products', productsRouter);
    app.use('/api/customers', customersRouter);
    app.use('/api/addresses', customerAddressesRouter);
    app.use('/api/getLocation', getlocation);
    app.use('/api/getPhoneNumber', getPhoneNumber);
    app.use('/api/sendnoti', sendnotiRouter);
};

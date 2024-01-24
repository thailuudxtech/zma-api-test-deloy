const express = require('express');
const CustomerAddressesController = require('../customerAddresses/customerAddresses.controller');
const customerAddressesController = new CustomerAddressesController()
const customerAddressesRouter = express.Router();


customerAddressesRouter.get('/:id',customerAddressesController.getAddressesByIdCustomer);

customerAddressesRouter.post('/:id',customerAddressesController.postAddressesByIdCustomer);


module.exports = customerAddressesRouter;
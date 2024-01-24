const express = require('express');
const CustomerController = require('../customers/customer.controller');
const customerController = new CustomerController()
const customersRouter = express.Router();


customersRouter.get('/',customerController.getAllCustomers);

module.exports = customersRouter;
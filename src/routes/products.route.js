const express = require('express');
const ProductController = require('../products/products.controller');
const productController = new ProductController()
const productsRouter = express.Router();



productsRouter.get('/',productController.getAllProducts);

module.exports = productsRouter;


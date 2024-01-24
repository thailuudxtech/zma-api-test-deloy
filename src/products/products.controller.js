const ProductService = require('./products.service');
const productService = new ProductService();


class ProductController {
    async getAllProducts(req, res, next) {
        try {
            const data = await productService.getAllProducts();
            res.status(200).json(data)
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductController


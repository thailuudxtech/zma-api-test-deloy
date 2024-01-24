const ProductRepsitory = require('./products.repository');
const productRepsitory = new ProductRepsitory();

class ProductService {
    async getAllProducts() {
        try {
            const data = await productRepsitory.getAllProducts();
            return data;
        } catch (error) {
            throw error
        }
    }
};

module.exports = ProductService
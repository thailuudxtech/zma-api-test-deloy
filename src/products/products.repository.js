
const getData = require('../utils/data.util')

class ProductRepsitory {
    async getAllProducts() {
        try {
            const response = await getData.getData('products')
            return response.data
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductRepsitory
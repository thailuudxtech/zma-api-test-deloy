
const getData = require('../utils/data.util')

class CustomersRepsitory {
    async getAllCustomers() {
        try {
            const response = await getData.getData('customers')
            return response.data
        } catch (error) {
            throw error
        }
    }
}

module.exports = CustomersRepsitory

const utils = require('../utils/data.util')

class CustomerAddresserRepsitory {
    async getAddressesByIdCustomer(idCustomer) {
        try {
            const response = await utils.getAddressesByIdCustomer(idCustomer)
            return response.data
        } catch (error) {
            throw error
        }
    }

    async postAddressesByIdCustomer(idCustomer,addressData) {
       
        try {
            const response = await utils.postAddressesByIdCustomer(idCustomer,addressData)
            return response.data
        } catch (error) {
            throw error
        }
    }
}

module.exports = CustomerAddresserRepsitory
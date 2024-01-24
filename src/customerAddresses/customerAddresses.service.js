const CustomerAddressesRepsitory = require('./customerAddresses.repository');
const customerAddressesRepsitory = new CustomerAddressesRepsitory();

class CustomerAddressesService {
    async getAddressesByIdCustomer(idCustomer) {
        try {
            const data = await customerAddressesRepsitory.getAddressesByIdCustomer(idCustomer);
            return data;
        } catch (error) {
            throw error
        }
    }

    async postAddressesByIdCustomer(idCustomer,addressData) {
        try {
            const data = await customerAddressesRepsitory.postAddressesByIdCustomer(idCustomer,addressData);
            return data;
        } catch (error) {
            throw error
        }
    }
};

module.exports = CustomerAddressesService
const CustomerRepsitory = require('./customer.repository');
const customerRepsitory = new CustomerRepsitory();

class CustomerService {
    async getAllCustomers() {
        try {
            const data = await customerRepsitory.getAllCustomers();
            return data;
        } catch (error) {
            throw error
        }
    }
};

module.exports = CustomerService
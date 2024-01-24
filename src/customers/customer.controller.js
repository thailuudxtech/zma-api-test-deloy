const CustomerService = require('./customer.service');
const customerService = new CustomerService();


class CustomerController {
    async getAllCustomers(req, res, next) {
        try {
            const data = await customerService.getAllCustomers();
            res.status(200).json(data.customers) ;
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CustomerController


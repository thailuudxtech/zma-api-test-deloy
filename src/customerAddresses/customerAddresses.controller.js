const CustomerAddressesService = require('./customerAddresses.service');
const customerAddressesService = new CustomerAddressesService();


class CustomerAddressesController {
    async getAddressesByIdCustomer(req, res, next) {
        const idCustomer = req.params.id
        try {
            const data = await customerAddressesService.getAddressesByIdCustomer(idCustomer);
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async postAddressesByIdCustomer(req, res, next) {
        const idCustomer = req.params.id
        const addressData = req.body

        function convertObject(inputObject) {
            const desiredFormat = {};
            for (const key in inputObject) {
              desiredFormat[`"${key}"`] = inputObject[key];
            }
            return desiredFormat;
          }

        const result = convertObject(addressData);
        console.log(555555,result);
        try {
            const data = await customerAddressesService.postAddressesByIdCustomer(idCustomer, result);
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CustomerAddressesController


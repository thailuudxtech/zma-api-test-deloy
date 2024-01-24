const axios = require('axios');
const username = process.env.SAPO_API_USERNAME;
const password = process.env.SAPO_API_PASSWORD;


function getData(pathName) {
    if (pathName) {
        if (!username || !password) {
            throw new Error('Missing SAPo API username or password');
        }
        return axios.get(`https://dx-tech.mysapo.net/admin/${pathName}.json`, {
            auth: {
                username,
                password,
            }
        });
    }
}

function getAddressesByIdCustomer(IdCustomer, addressData) {
    if (IdCustomer) {
        if (!username || !password) {
            throw new Error('Missing SAPo API username or password');
        }
        return axios.get(`https://dx-tech.mysapo.net/admin/customers/${IdCustomer}/addresses.json`, {
            auth: {
                username,
                password,
            }
        });
    }
}


function postAddressesByIdCustomer(IdCustomer,addressData) {
    console.log(999999, addressData);
    if (IdCustomer) {
        if (!username || !password) {
            throw new Error('Missing SAPo API username or password');
        }
        return axios.post(`https://dx-tech.mysapo.net/admin/customers/${IdCustomer}/addresses.json`, {
            addresses: addressData
        }, {
            auth: {
                username,
                password,
            }
        });
    }
}



module.exports = { getData, getAddressesByIdCustomer, postAddressesByIdCustomer };

const Customer = require('../../models/customer.model');

const transformCustomer = customer => {
  return {
    ...customer._doc,
    _id: customer.id
  };
};

exports.transformCustomer = transformCustomer;

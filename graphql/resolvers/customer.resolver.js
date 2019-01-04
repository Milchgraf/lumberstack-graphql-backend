const Customer = require('../../models/customer.model');
const { transformCustomer } = require('./merge');

module.exports = {
  customers: async (args, req) => {
    try {
      const customers = await Customer.find();
      return customers.map(customer => {
        return {
          ...customer._doc,
          _id: customer.id
        };
      });
    } catch (error) {
      throw error;
    }
  },

  createCustomer: async (args, req) => {
    const customer = new Customer({
      salutation: args.customerInput.salutation,
      firstName: args.customerInput.firstName,
      lastName: args.customerInput.lastName,
      companyName: args.customerInput.companyName,
      street: args.customerInput.street,
      houseNr: args.customerInput.houseNr,
      zip: args.customerInput.zip,
      city: args.customerInput.city,
      country: args.customerInput.country,
      mobileNr: args.customerInput.mobileNr,
      phoneNr: args.customerInput.phoneNr,
      email: args.customerInput.email,
      comment: args.customerInput.comment
    });

    console.log(customer);

    let createdCustomer;
    try {
      const result = await customer.save();
      createdCustomer = transformCustomer(result);
      return createdCustomer;
    } catch (error) {
      throw error;
    }
  }
}

const customerResolver = require('./customer.resolver');

const rootResolver = {
  ...customerResolver
};

module.exports = rootResolver;

const customerResolver = require('./customer.resolver');
const productResolver = require('./product.resolver');
const authResolver = require('./auth.resolver');

const rootResolver = {
  ...customerResolver,
  ...productResolver,
  ...authResolver
};

module.exports = rootResolver;

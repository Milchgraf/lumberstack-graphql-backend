const Customer = require('../../models/customer.model');
const User = require('../../models/user.model');

const transformCustomer = customer => {
  return {
    ...customer._doc,
    _id: customer.id,
    creator: user.bind(this, customer.creator)
  };
};

const transformProduct = product => {
  return {
    ...product._doc,
    _id: product.id,
    creator: user.bind(this, product.creator)
  };
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id
    };
  } catch (error) {
    throw error;
  }
}

exports.transformCustomer = transformCustomer;
exports.transformProduct = transformProduct;

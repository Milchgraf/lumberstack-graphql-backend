const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  productDescr: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  }
});

module.exports = model('Product', productSchema);

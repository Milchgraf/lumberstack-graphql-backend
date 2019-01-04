const Product = require('../../models/product.model');
const { transformProduct } =  require('./merge');

module.exports = {
  products: async () => {
    try {
      const products = await Product.find();
      return products.map(product => {
        return transformProduct(product);
      });
    } catch (error) {
      throw error;
    }
  },

  createProduct: async (args, req) => {
    const product = new Product({
      productName: args.productInput.productName,
      productDescr: args.productInput.productDescr,
      productPrice: args.productInput.productPrice
    });

    let createdProduct;
    try {
      const result = await product.save();
      createdProduct = transformProduct(result);
      return createdProduct;
    } catch (error) {
      throw error;
    }
  }
}

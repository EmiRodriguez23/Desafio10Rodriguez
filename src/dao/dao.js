const Cart = require('./models/cart');
const Message = require('./models/message');
const Product = require('./models/product');

// Métodos para interactuar con la base de datos de MongoDB
module.exports = {
  getCart: async (cartId) => {
    return await Cart.findById(cartId);
  },
  saveCart: async (cart) => {
    return await cart.save();
  },
  getMessage: async (messageId) => {
    return await Message.findById(messageId);
  },
  saveMessage: async (message) => {
    return await message.save();
  },
  getProduct: async (productId) => {
    return await Product.findById(productId);
  },
  saveProduct: async (product) => {
    return await product.save();
  },
};

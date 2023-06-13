const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  // Definir los campos y tipos de datos del esquema de Carrito
});

module.exports = mongoose.model('Cart', cartSchema);

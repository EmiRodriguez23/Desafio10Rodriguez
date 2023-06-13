const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // Definir los campos y tipos de datos del esquema de Producto
});

module.exports = mongoose.model('Product', productSchema);

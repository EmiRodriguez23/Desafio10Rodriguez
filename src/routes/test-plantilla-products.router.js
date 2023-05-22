const express = require('express');
const router = express.Router();

// Ruta para la vista de productos con plantilla
router.get('/products', (req, res) => {
  const products = obtenerProductos();
  res.render('products', { title: 'Lista de productos', products });
});

module.exports = router;

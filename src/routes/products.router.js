const express = require('express');
const router = express.Router();

// Ruta para la vista index.handlebars
router.get('/', (req, res) => {
  res.render('index', { title: 'Lista de productos', products: obtenerProductos() });
});

// Ruta para la vista realTimeProducts.handlebars
router.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts', { title: 'Lista de productos en tiempo real', products: obtenerProductos() });
});

// Ruta para agregar un producto
router.post('/add', (req, res) => {
  const newProduct = req.body.product;
  agregarProducto(newProduct);
  res.redirect('/products/realtimeproducts');
});

// Ruta para eliminar un producto
router.post('/delete', (req, res) => {
  const productIndex = req.body.index;
  eliminarProducto(productIndex);
  res.redirect('/products/realtimeproducts');
});

// Funciones auxiliares para manejar la lista de productos
function obtenerProductos() {
  // Lógica para obtener los productos desde una base de datos o cualquier otra fuente
  return ['Producto 1', 'Producto 2', 'Producto 3'];
}

function agregarProducto(producto) {
  // Lógica para agregar un producto a la lista
}

function eliminarProducto(indice) {
  // Lógica para eliminar un producto de la lista
}

module.exports = router;

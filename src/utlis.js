// Importa las funciones de utils.js
const { agregarProducto, eliminarProducto, obtenerProductos } = require('./utils');

// ...

// Ruta para el formulario de creación de productos
app.post('/realtimeproducts', (req, res) => {
  const nuevoProducto = req.body.producto;

  // Agrega el nuevo producto a la lista
  agregarProducto(nuevoProducto);

  // Envía la lista de productos actualizada a todos los clientes conectados
  io.emit('productosActualizados', obtenerProductos());

  // Redirige a la página de productos en tiempo real
  res.redirect('/realtimeproducts');
});

// ...

// Ruta para la vista "realTimeProducts.handlebars"
app.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts', { productos: obtenerProductos() });
});

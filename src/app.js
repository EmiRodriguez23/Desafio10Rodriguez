/* // Importa los paquetes necesarios
const express = require('express');
const exphbs = require('express-handlebars');
const http = require('http');
const socketIO = require('socket.io');

// Crea una instancia de Express
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configura el motor de plantillas Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configura la carpeta de vistas
app.set('views', __dirname + '/views');

// Configura el directorio público
app.use(express.static(__dirname + '/public'));

// Configura la conexión WebSocket y las actualizaciones en tiempo real
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Envía la lista de productos actualizada cuando haya cambios
  socket.emit('productosActualizados', obtenerProductos());
});

// Ruta para la vista "realTimeProducts.handlebars"
app.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts', { productos: obtenerProductos() });
});

// Ruta para el formulario de creación de productos
app.post('/realtimeproducts', (req, res) => {
  const nuevoProducto = req.body.producto;
  
  // Lógica para agregar el nuevo producto a la lista

  // Envía la lista de productos actualizada a todos los clientes conectados
  io.emit('productosActualizados', obtenerProductos());

  // Redirige a la página de productos en tiempo real
  res.redirect('/realtimeproducts');
});

// Configura el servidor para escuchar en un puerto específico
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

// Función para obtener la lista de productos (ejemplo)
function obtenerProductos() {
  // Lógica para obtener los productos desde una base de datos o cualquier otra fuente
  return ['Producto 1', 'Producto 2', 'Producto 3'];
}

 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Conexión a la base de datos de MongoDB
mongoose.connect('<URL_DE_CONEXIÓN>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Resto del código...

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

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

/* const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Conexión a la base de datos de MongoDB
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Resto del código...

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
 */
// Importar los módulos necesarios
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

// Crear la instancia de la aplicación Express
const app = express();

// Configurar body-parser para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la sesión
app.use(session({
  secret: 'miClaveSecreta',
  resave: false,
  saveUninitialized: false
}));

// Definir las vistas y rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

app.get('/productos', (req, res) => {
  if (req.session.user) {
    res.send(`Bienvenido/a ${req.session.user.name} (${req.session.user.role}) a la vista de productos.`);
  } else {
    res.redirect('/');
  }
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Verificar las credenciales del usuario
  if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') {
    req.session.user = {
      email: email,
      name: 'Admin Coder',
      role: 'admin'
    };
  } else {
    req.session.user = {
      email: email,
      name: 'Usuario',
      role: 'usuario'
    };
  }

  res.redirect('/productos');
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});


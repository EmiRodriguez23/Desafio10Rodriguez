const express = require('express');
const router = express.Router();

// Ruta para la vista de lista de libros
router.get('/books', (req, res) => {
  const books = obtenerLibros();
  res.render('books', { title: 'Lista de libros', books });
});

// Ruta para agregar un libro
router.post('/books/add', (req, res) => {
  const newBook = req.body.book;
  agregarLibro(newBook);
  res.redirect('/books');
});

// Ruta para eliminar un libro
router.post('/books/delete', (req, res) => {
  const bookIndex = req.body.index;
  eliminarLibro(bookIndex);
  res.redirect('/books');
});

// Funciones auxiliares para manejar la lista de libros
function obtenerLibros() {
  // Lógica para obtener los libros desde una base de datos o cualquier otra fuente
  return ['Libro 1', 'Libro 2', 'Libro 3'];
}

function agregarLibro(libro) {
  // Lógica para agregar un libro a la lista
}

function eliminarLibro(indice) {
  // Lógica para eliminar un libro de la lista
}

module.exports = router;

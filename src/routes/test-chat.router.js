const express = require('express');
const router = express.Router();

// Ruta para la vista de chat
router.get('/chat', (req, res) => {
  res.render('chat', { title: 'Chat' });
});

// Ruta para enviar un mensaje
router.post('/chat', (req, res) => {
  const message = req.body.message;
  // Lógica para manejar el mensaje
  res.redirect('/test/chat');
});

module.exports = router;

ar express = require('express');
var router = express.Router();
var contacto = require('../controllers/contacto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Avances en computacion' });
});
router.get('/registroContacto',contacto.registro);
router.get('/respuestaContacto',contacto.respuesta);
module.exports = router;

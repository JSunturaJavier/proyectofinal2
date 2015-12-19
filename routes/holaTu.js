var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('holaTu', { titulo: 'BIENVENIDO', Mensaje: 'JAVIER' });
});

module.exports = router;

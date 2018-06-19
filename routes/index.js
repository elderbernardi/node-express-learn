var express = require('express');
var router = express.Router();

var Banco = require('../model/Banco');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Titulo', other: 'lalala' });
});

router.get('/carros', function(req, res){
  let banco = new Banco();
  let carros = banco.getAll();

  res.render('carros', { carros: carros });

});

router.get('/teste',function(req, res){
  res.render('jsNohtml');
});


module.exports = router;

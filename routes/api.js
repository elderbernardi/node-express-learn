var express = require('express');
var router = express.Router();
var Banco = require('../model/Banco');
var Carro = require('../model/Carro');
var dao = new Banco();


router.get('/:id', function(req, res){
  let id =  parseInt( req.params.id);
  if(id){
    let carro = dao.getById(id);

    if(carro){
      res.contentType('application/json');
      res.send(carro);
    }else{
      res.sendStatus(404);
    }
      
  }else{
    res.status=300;
    res.send("Paramater Error.");
  }
   

});


router.get('/', function(req, res){
  
  res.status(200);
  res.contentType('application/json');
  res.send( dao.getAll() );

});

router.post('/', function(req,res){
  let carro = new Carro(req.body.id, req.body.marca);
  try {
    carro.id = parseInt(carro.id);
    if( carro.id && carro.marca ){
      dao.add(carro);
      res.status(200).send(carro);
    }else
      throw 'Sem parâmetros válidos.';
    
  } catch (error) {
    console.log(error);
    res.status(422).send('Entidade malformada.');  
  }
});


module.exports = router;


var Produto = require('./Produto');
var Carro = require('./Carro');
var Banco = require('./Banco');


var umProduto = new Produto(1, 'Lolo', 10);

umProduto.faz = function(teste){
    return this.mostra() + ' fazendo ' + teste;
}

console.log(umProduto.mostra());
console.log(umProduto.faz('oi'));

var umCarro = new Carro(2, 'VW');

console.log( umCarro.mostra() );
umCarro.vrum();

var bd = new Banco();
console.log( bd.getById(0) );

console.log(bd.getById(1));

console.log('all: ', bd.getAll() );

try {
    //bd.add( {id: 10, marca: 'fiat'} );
    bd.add( new Carro(4, 'Ford') );
} catch (error) {
    console.log('deu erro: ' + error);
}

console.log('Carros depois do add: ', bd.getAll());


/* Array*/
var array = [];





var umProduto = new Produto(1, 'Lolo', 10);

umProduto.faz = function(teste){
    return this.mostra() + ' fazendo ' + teste;
}

alert(umProduto.mostra());
alert(umProduto.faz('oi'));

var umCarro = new Carro(2, 'VW');

alert( umCarro.mostra() );
umCarro.vrum();

var bd = new Banco();
alert( bd.getById(0) );

alert(bd.getById(1));

alert('all: ', bd.getAll() );

let tit = document.getElementById('titulo');
tit.title = 'Titulo do js';
tit.textContent = 'text do js';

try {
    //bd.add( {id: 10, marca: 'fiat'} );
    bd.add( new Carro(4, 'Ford') );
} catch (error) {
    alert('deu erro: ' + error);
}

alert('Carros depois do add: ', bd.getAll());


/* Array*/
var array = [];



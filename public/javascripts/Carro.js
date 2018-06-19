

var Carro = function( id, marca){
    Produto.call(this, id, );
    this.marca = marca;
}

Carro.prototype= new Produto();
Carro.prototype.constructor = Carro;
Carro.prototype.vrum = function(){
    console.log("Vrummm da marca "+ this.marca);
}

var Carro = require('./Carro');


var Banco = function(){

    this.data = [];
    this.data.push(new Carro(0,'vw'));
    this.data.push(new Carro(1, 'fiat'));
    this.data.push(new Carro(2, 'jeep'));
    
};
Banco.prototype.getById = function(id){
    
    for (var i=0; i< this.data.length; i++){
        if (this.data[i].id === id)
            return this.data[i];
    }
    return undefined;
}

Banco.prototype.getAll = function(){
    return this.data;
}

Banco.prototype.add = function(carro){
    if( carro instanceof Carro)
        this.data.push(carro);
    else throw 'não é um carro!'
}


module.exports = Banco;
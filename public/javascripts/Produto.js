
var Produto = function( id ){
    this.id = id;

    
}

Produto.prototype.mostra = function(  ){
    return 'Produto '+ this.id ;
}

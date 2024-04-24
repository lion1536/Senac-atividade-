// O id é muito importante para identificar o elemento
var excluir = document.getElementById("delete");
// é importante verificar se o elemento existe antes de removê-lo
if (excluir){
    // O código abaixo fará a exclusão
    excluir.remove();
}else{
    console.log("Elemento não encontrado.");
}
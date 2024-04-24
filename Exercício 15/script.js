// Remove a classe do elemento pelo id
function removerClasse(){
    //Encontra o id do elemento
    var elemento = document.getElementById('meu-elemento');
    // Remove a classe CSS
    elemento.classList.remove('classe-a-remover');
}
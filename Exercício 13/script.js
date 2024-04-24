// Função que adiciona novo item a lista
function adicionarNovoItem(texto){
    // Cria um novo item
    var novoItem = document.createElement('li');
    // Define o texto do novo item
    novoItem.textContent = texto;
    // Encontra o id da lista
    var lista = document.getElementById('minha-lista');
    // Adiciona o novo item a lista
    lista.appendChild(novoItem);
}
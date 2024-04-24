// Vai criar a função de adicionar uma linha à tabela
function adicionarLinha(){
    // Vai encontrar o id do elemento, que é uma tabela
    var tabela = document.getElementById("minhatabela");
    // Vai criar a função de adicionar uma nova linha
    var novaLinha = tabela.insertRow();
    // Este código eu uso para células às linhas novas
    var cell1 = novaLinha.insertCell(0);
    var cell2 = novaLinha.insertCell(1);
    cell1.innerHTML = "Jane";
    cell2.innerHTML = "Doe";
}
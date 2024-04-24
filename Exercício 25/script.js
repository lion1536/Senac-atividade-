// Este código vai renderizar todo o conteúdo HTML
window.onload = function(){
    // Vai encontrar o id do elemento 
    var move = document.getElementById("move");
    // Este vai encontrar o id do elemento pai
    var novo = document.getElementById("novo");
    // Este vai finalizar a criação da função de mover o elemento para o elemento pai
    novo.appendChild(move);
};
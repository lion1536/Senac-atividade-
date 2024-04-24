// Este código vai renderizar todo o conteúdo HTML
window.onload = function(){
    // Vai encontrar o elemento pai pelo seu id
    var pai = document.getElementById("meuelementopai");
    // Vai criar um novo elemento filho
    var novoFilho = document.createElement("div");
    // Vai adicionar conteúdo no elemento filho
    novoFilho.textContent = "Conteúdo adicionado";
    // Adiciona o elemento filho ao elemento pai
    pai.appendChild(novoFilho);
}
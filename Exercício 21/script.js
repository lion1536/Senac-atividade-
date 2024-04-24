// Função que altera a cor ao passar o mouse em cima
function alterarEstilo(){
    var elemento = document.getElementById("mouse");
    // Altera a cor de fundo para laranja
    elemento.style.backgroundColor = "Orange";
}
// Este código vai renderizar todo o conteúdo HTML
window.onload = function(){
    // Adiciona o evento mouseover ao elemento
    var elemento = document.getElementById("mouse");
    elemento.addEventListener("mouseover", alterarEstilo);
};
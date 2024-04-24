// Este código vai renderizar todo o conteúdo HTML
window.onload = function(){
    // Vai selecionar todos os elemntos com a classe ".minha-classe"
    var elementos = document.querySelectorAll(".minha-classe");
    // Vai iterar sobre os elementos encontrados
    elementos.forEach(function(elemento){
        // Aqui eu vou poder mexer no tamanho das fontes dos elementos
        elemento.style.fontSize = "60px";
    });
};
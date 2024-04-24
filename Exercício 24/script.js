// Este código vai renderizar todo o conteúdo HTML
window.onload = function(){
    // Vai encontrar o elemento pai pelo id
    var elementopai = document.getElementById("meuelementopai");
    // Vai contar o número de elemntos filhos
    var numeroDeFilhos = elementopai.childElementCount;
    // Vai exibir o resultado
    console.log("Número de elementos filhos:", numeroDeFilhos);
};
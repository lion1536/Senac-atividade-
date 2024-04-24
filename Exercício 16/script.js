// Encontra todos os elementos 'minha classe'
var elementos = document.querySelectorAll('minha-classe');
// Exibe a quantidade de elementos no console
console.log("Número de elementos com a classe 'minha-classe':", elementos.length);
// Exibe a quantidade de elementos em um parágrafo
var paragrafo = document.getElementById('quantidade-elementos');
paragrafo.textContent = "Número de elementos com a classe 'minha-classe': " + elementos.length;
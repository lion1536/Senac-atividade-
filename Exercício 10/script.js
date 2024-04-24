// Seleciona todos os elementos com 'minha-classe'
var elementos = document.querySelectorAll('.minha-classe');
// Cada novo elemento que estiver dentro de minha classe ficará em itálico
elementos.forEach(function (elemento){
    elemento.style.fontStyle = 'italic';
});

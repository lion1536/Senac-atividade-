// este código vai renderizar a classe 'chocolate'
var elementos = document.getElementsByClassName('chocolate');
// o resto abaixo serve para estilar
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "red";
}
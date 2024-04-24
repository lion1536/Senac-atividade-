// Seleciona o botão com a id 'meubotão' e amrmazena na variável 'botão'
var botão = document.getElementById('meubotão');
// Aqui faz a mesma coisa que a primeira linha
var alvo = document.getElementById("alvo");
// Esta função faz o botão funcionar
botão.addEventListener("click", function(){
    // A cor vai mudar para amarelo
    alvo.style.backgroundColor = "yellow";
});

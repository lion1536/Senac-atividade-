// Vai selecionar o id junto com a variável input
var input = document.getElementById('meu-input');
// Monitora para verificar os valores de input
input.addEventListener('input', function(){
    // Quando o valor for alterado pelo usuário, o comnsole vai mostrar
    console.log(input.value);
});
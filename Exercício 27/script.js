// Aqui eu crio a função de remover o evento de um elemento
function cliqueHandler(){
    console.log("O botão foi clicado!");
}
// Aqui eu adiciono o evento ao botão
var meubotao = document.getElementById("meubotao");
meubotao.addEventListener("click", cliqueHandler);
// Serve para remover o botão após 3 segundos
setTimeout(function(){
    meubotao.removeEventListener("click", cliqueHandler);
    console.log("Evento removido do botão.");
}, 3000);
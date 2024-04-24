// Cria a função de converter o texto em maiúsculas
function converterParaMaiusculas(){
    // Obtém o texto inserido pelo usuário
    var texto = document.getElementById("texto").value;
    // Converte o texto para maiúsculas
    var textoEmMaiusculas = texto.toUpperCase();
    document.getElementById("resultado").innerText = textoEmMaiusculas;
}
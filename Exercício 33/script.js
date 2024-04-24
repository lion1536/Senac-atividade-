// Vai criar uma função de validar o email
function validarEmail(event) {
// Previne o envio padrão do formulário
    event.preventDefault();
    // Vai identificar o id e obter um valor para email
    var email = document.getElementById("email").value;
    // Essa é a expressão para validar o formato de email
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Serve para verificar se o email corresponde à expressão
    if (regexEmail.test(email)){
        // Vai dar o aviso de email válido e pedir para enviar o formulário
        document.getElementById("formulario").submit();
    } else {
        // Vai dizer que o email está inválido e vai avisar que deu erro
        document.getElementById("mensagemErro").style.display = "block";
    }
}
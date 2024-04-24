// Cria a função de calcular a soma
function calcularSoma(event){
    // Previne o envio padrão do formulário
    event.preventDefault();
    // Estes códigos obtêm os valores dos campos de entrada
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    // Verifica se os valores inseridos são válidos
    if (!isNaN(numero1) && !isNaN(numero2)){
        // Efetua a soma dos números
        var soma = numero1 + numero2;
        // Exibe o resultado na div de resultado
        document.getElementById("resultado").innerText = "A soma é: " + soma;
    } else {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
    }
}
function verificar(){
    const numero = parseInt(document.getElementById('operador').value);
    const valor = parseInt(document.getElementById('operador1').value);
    const root = parseInt(document.getElementById('operador2').value);
    document.getElementById('resultado').innerHTML = (numero+valor+root)/3;
}
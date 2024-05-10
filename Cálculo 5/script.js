function verificar(){
    const numero = parseInt(document.getElementById('operador').value);
    document.getElementById('resultado').innerHTML = Math.floor(numero/10+(numero%10))
}
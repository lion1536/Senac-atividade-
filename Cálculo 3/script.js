function verificar(){
    const numero = parseInt(document.getElementById('operador').value);
    document.getElementById('resultado').innerHTML = Math.sqrt(numero**2);
}
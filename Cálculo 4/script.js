function verificar(){
    const numero = parseInt(document.getElementById('operador').value);
    document.getElementById('resultado').innerHTML = ((1+numero)*numero)/2;
}
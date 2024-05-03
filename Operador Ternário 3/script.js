function sinal(){
    document.getElementById('resultado').innerHTML =
    document.getElementById('operador').value>0? "Positivo!":document.getElementById('operador').value==0? "Zero!":"Negativo!";
}
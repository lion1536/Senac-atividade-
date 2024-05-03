function verificar(){
    document.getElementById('resultado').innerHTML =
    document.getElementById('operador').value%3==0 && document.getElementById('operador').value%5==0?"É divisível por 5 e por 3!":"Não é divisível por 3 e por 5!"
}
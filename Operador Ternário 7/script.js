function checkNumber(){
    document.getElementById('resultado').innerHTML =
    document.getElementById('operador').value%7===0 && document.getElementById('operador').value%9===0?"É divisível por 7 e por 9!":"Não é divisível por 7 nem por 9!"
}
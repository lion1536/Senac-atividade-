function verificar(){
    document.getElementById('resultado').innerHTML =
    document.getElementById('operador').value%3==0 && document.getElementById('operador').value%5==0?"É múltiplo de 3 e de 5!":"Não é múltiplo de 3 nem de 5!"
}
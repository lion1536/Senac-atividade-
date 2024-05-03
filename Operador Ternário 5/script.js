function idade(){
    document.getElementById('resultado').innerHTML =
    document.getElementById('operador').value>=16? "Maior de 16 anos, pode votar!":"Menor de 16, não pode votar!"
}
function verificar(){
    const numero = document.getElementById('operador').value;
    if(numero>=21){
        const p = document.getElementById('resultado');
        p.innerHTML = "Maior de 21 anos, pode entrar!"
    }
    if(numero<21){
        const p = document.getElementById('resultado');
        p.innerHTML = "Não pode entrar, menor de 21 anos!"
    }
}
function verificar(){
    const numero = document.getElementById('operador').value;
    if(numero>=18){
        const p = document.getElementById('resultado');
        p.innerHTML = "18 anos, pode comprar bebida alcoólica!"
    }
    if(numero<18){
        const p = document.getElementById('resultado');
        p.innerHTML = "Menor de 18 anos, não pode comprar bebida alcoólica!"
    }
}
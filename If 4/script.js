function verificar(){
    const numero = document.getElementById('operador').value;
    if(numero>100){
        const p = document.getElementById('resultado');
        p.innerHTML = "É maior que 100!"
    }
    if(numero<100){
        const p = document.getElementById('resultado');
        p.innerHTML = "É menor que 100!"
    }
    if(numero==100){
        const p = document.getElementById('resultado');
        p.innerHTML = "É igual a 100!"
    }
}
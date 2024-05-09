function verificar(){
    const numero = document.getElementById('operador').value;
    if(numero<50 && numero>=0){
        const p = document.getElementById('resultado');
        p.innerHTML = "É positivo e menor que 50!"
    }
    if(numero<0 && numero>-50){
        const p = document.getElementById('resultado');
        p.innerHTML = "É negativo e maior que -50!"
    }
}
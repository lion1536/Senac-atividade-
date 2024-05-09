function verificar(){
    const numero = document.getElementById('operador').value;
    if(numero>0){
        const p = document.getElementById('resultado');
        p.innerHTML = "O número é positivo!"
    }
    if(numero<0){
        const p = document.getElementById('resultado');
        p.innerHTML = "O número é negativo!"
    }
    if(numero==0){
        const p = document.getElementById('resultado');
        p.innerHTML = "Zero!"
    }
}
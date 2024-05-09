function verificar(){
    const numero =document.getElementById('operador').value;
    if(numero%3==0){
        const p = document.getElementById('resultado');
        p.innerHTML = "É múltiplo de 3!"
    }
    if(numero%5==0){
        const p = document.getElementById('resultado');
        p.innerHTML = "É múltiplo de 5!"
    }
}
function verificar(){
    const numero = document.getElementById('operador').value;
    if(numero%7===0 && numero%9==0){
        const p = document.getElementById('resultado');
        p.innerHTML = "É divisível por 7 e por 9"
    }
}
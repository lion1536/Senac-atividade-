function verifyNumber(){
    const numero = document.getElementById('number').value;
    if(numero%2===0){
        const p = document.getElementById('resultado');
        p.innerHTML = "O número é par!";
    }if(numero%2===1){
        const p = document.getElementById('resultado');
        p.innerHTML = "O número é ímpar!"
    }
}
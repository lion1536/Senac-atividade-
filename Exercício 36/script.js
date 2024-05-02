function verificarNumero(){
    const numero = document.getElementById('meu-input').value;
    if(numero>0){
        const p = document.getElementById('positivo!');
        p.innerHTML = 'Positivo!';
    }if(numero<0) {
        const p = document.getElementById('negativo!');
        p.innerHTML = 'Negativo!';
    }if(numero==0){
        const p = document.getElementById('zero!');
        p.innerHTML = 'Zero!'
    }
}
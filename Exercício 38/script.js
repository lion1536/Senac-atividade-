function verificarValor(){
    const numero = document.getElementById('campo1').value;
    const valor = document.getElementById('campo2').value;
    if(numero==valor){
        const p = document.getElementById('resultado');
        p.innerHTML = 'Os números são iguais!';
    }if(numero>valor){
        const p = document.getElementById('resultado');
        p.innerHTML = numero + 'É o maior número!';
    }if(numero<valor){
        const p = document.getElementById('resultado');
        p.innerHTML = valor + 'É o maior número!';
    }
}
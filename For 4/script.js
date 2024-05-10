function verificar(){
    const numero = document.getElementById('operador').value;
    const valor = document.getElementById('result');
    for(let i = 2; i <=numero; i +=2){
        elemento = document.createElement('p');
        elemento.innerHTML = i;
        document.body.appendChild(elemento);
    }
}
function verificar(){
    const numero = parseInt(document.getElementById('operador').value);
    const valor = document.getElementById('resultado');
    for(let i = 2; i<6; i++){
        let elemento = document.createElement('p');
        elemento.innerHTML = i*numero;
        document.body.appendChild(elemento);
    }
}
function verificar(){
    const numero = parseInt(document.getElementById('operador').value);
    let elemento = document.createElement('p');
    elemento.innerHTML = (5*numero*((numero/2)*(1/Math.tan(Math.PI/5))/2))
    document.body.appendChild(elemento);
}
for(let i = 1; i<=50; i+=5){
    let elemento = document.createElement('p');
    elemento.innerHTML = i;
    document.body.appendChild(elemento);
}
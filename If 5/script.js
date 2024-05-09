function verificar(){
    const numero = document.getElementById('operador').value;
    if(numero==366){
        const p = document.getElementById('resultado');
        p.innerHTML = "Esse número é um ano bissexto!"
    }
}
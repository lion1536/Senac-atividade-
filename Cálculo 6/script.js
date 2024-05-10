function verificar(){
    const ano = parseInt(document.getElementById('operador').value);
    const century = document.getElementById('resultado');
    if((ano%4==0 && ano%100!=0) || (ano%400==0 && ano%100==0)){
        century.innerHTML = "Esse ano é bissexto"
        return;
    }
    century.innerHTML = "Esse ano não é bissexto"
}
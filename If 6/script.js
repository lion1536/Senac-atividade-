function verificar(){
    const numero = document.getElementById('operador').value;
    if(numero>=7){
        const p = document.getElementById('resultado');
        p.innerHTML = "Você tirou nota suficiente!"
    }
    if(numero<=5){
        const p = document.getElementById('resultado');
        p.innerHTML = "Você não tioru nota suficiente, vai precisar de recuperação!"
    }
}
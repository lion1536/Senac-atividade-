function colocarSaudacao(){
    const data = new Date();
    const hora = data.getHours();
    if((hora>=6)&&(hora<=12)){
        const data = document.getElementById('resultado');
        data.innerHTML = 'Bom dia Pedro!';
    }
    if((hora>=12)&&(hora<=19)){
        const data = document.getElementById('resultado');
        data.innerHTML = 'Boa tarde Pedro!';
    }
    if((hora>=18)||(hora<=5)){
        const data = document.getElementById('resultado');
        data.innerHTML = 'Boa noite Pedro!';
    }
}
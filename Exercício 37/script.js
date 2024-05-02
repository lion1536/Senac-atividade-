function verificarIdade(){
    const idade = document.getElementById('idade-do-usuário').value;
    if(idade>18){
        const p = document.getElementById('maior');
        p.innerHTML = 'Maior que 18 anos!';
    }
    if(idade<18){
        const p = document.getElementById('menor');
        p.innerHTML = 'Menor que 18 anos!';
    }
    if(idade==18){
        const p = document.getElementById('igual');
        p.innerHTML = '18 anos!';
    }
}
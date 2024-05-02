const par = document.getElementById('resultado');
let numeros = [" pedro", " carlito", " carlos", " eminen"];
let soma = numeros.reduce((total, numero) => total + numero);
console.log(soma);
par.innerHTML = soma
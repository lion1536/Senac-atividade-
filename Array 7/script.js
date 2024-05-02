var phone = document.getElementById('resultado');
var numero = [3, 4, 78, 125, 5, 6, 1, 2, 90, 43];
var maior = numero.reduce((total, number) => + (total, number ** 2), 0);
phone.innerHTML = (maior);
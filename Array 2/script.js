var element = document.getElementById('resultado');
var numero = [35, 45, 12, 17, 22, 79];
var maior = numero.map(numero => numero * 2.54);
element.innerHTML = (maior);
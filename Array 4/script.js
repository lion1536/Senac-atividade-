var grau = document.getElementById('resultado');
var numero = [87, 12, 45, 35, -21, 24, 56, -71];
var big = numero.map(numero => (numero * 9/5 + 32));
grau.innerHTML = (big);
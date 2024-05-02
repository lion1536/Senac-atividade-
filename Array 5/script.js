var code = document.getElementById('resultado');
var numero = [35, -16, 8, 10, -2, -45, 99, 163];
var math = numero.filter(numero => numero>0);
code.innerHTML = (math);
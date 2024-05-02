var pair = document.getElementById('resultado');
var numero = [10, 6, 13, 18, 19, 17, 30, 23, 67, 72, 28, 27, 55, 29];
var big = numero.reduce((total, number) => (total + number), 0)/numero.length
pair.innerHTML = (big);
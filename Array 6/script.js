var phone = document.getElementById('resultado');
var numero = [1, 34, -7, -3, 3, 9, 46, 86, 578, 2024, 4890];
var size = numero.filter(number => (number < -99) || (number > 99));
phone.innerHTML = (size);
var code = document.getElementById('resultado');
var list = ["pedro", "carlos", "bernardo", "eminem", "fabiane", "samuel", "marcos", "viviane", "eduardo", "celso"];
var larger = list.map(number => number + list.indexOf(number));
code.innerHTML = (larger);
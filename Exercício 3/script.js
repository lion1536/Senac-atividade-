// Usei aspas duplas para criar um elemento <p>
var novoParagrafo = document.createElement("p");
// Serve para adicionar texto ao novo parágrafo
novoParagrafo.textContent = "novoParagrafo";
// A id serve para renderizar o parágrafo e criar seu elemento
var container = document.getElementById("container");
// Serve para colocar o texto do parágrafo no elemento existente
container.appendChild(novoParagrafo);
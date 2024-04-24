// Esta é a base para criar o array de strings
var strings = ["item 1", "item 2", "item 3"];
// Vai adicionar cada string como um item <li> na lista
var lista = document.getElementById('minha-lista');
// String será um item <li> na lista
strings.forEach(function(string){
    // Vai criar um elemento <li>
    var listItem = document.createElement('li');
    // Vai definir o elemento <li> como a string atual
    listItem.textContent = string;
    // Por fim, finaliza o processo de adicionar o elemento <li>
    lista.appendChild(listItem);
});
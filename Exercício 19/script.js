// Este código vai renderizar todo o conteúdo HTML
window.onload = function(){
    // Vai achar o id da variável elementtobemoved
    var elementtomove = document.getElementById("elementtomove");
    // Vai achar o novo elemento pai onde queremos mover o elemento pelo seu id
    var novoPai = document.getElementById("novoPai");
    // Este código vai mover o elemento que selecionamos para ser movido, será pelo id
    novoPai.appendChild(elementtomove);
}
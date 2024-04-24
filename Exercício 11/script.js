function alternarVisibilidade(elementID){
    var elemento = document.getElementById(elementID);
    if (elemento.style.display === "none"){
        elemento.style.display === "block"; //Se estava oculto torna visível
    } else {
        elemento.style.display = "none"; // Se estava visível torna oculto
    }
}
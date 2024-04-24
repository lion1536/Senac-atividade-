// Vai selecionar todos os elementos da classe de CSS '.minha-classe'
var elementos = document.querySelectorAll('.minha-classe');
// Itera sobre cada elemento criado
elementos.forEach(function(elemento){
    // Qualquer coisa que for digitada aparecerá no live preview
    elemento.textContent = 'Texto alterado'
})
// Aqui eu crio a função de alterar o estilo do texto
function alterarEstilo(){
    // Vai identicar o id e obter o valor
    var estiloSelecionado = document.getElementById("selecionarEstilo").value;
    // Identifica a id do texto
    var texto = document.getElementById("texto");
    // Aplica os estilos de acordo com a opção selecionada
    switch(estiloSelecionado){
        // Todas as linhas embaixo vão fazer os estilos funcionarem
        case "normal": // Texto padrão
        texto.style.fontWeight = "normal";
        texto.style.fontStyle = "normal";
        texto.style.textDecoration = "none";
        break;
        case "negrito": // Texto em negrito
            texto.style.fontWeight = "bold";
            break;
            case "italico": // Texto em itálico
                texto.style.fontStyle = "italic";
                break;
                case "sublinhado": // Texto sublinhado
                    texto.style.textDecoration = "underline";
                    break;
                    default:
                        break;
    }
}
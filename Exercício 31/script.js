// Função que altera o conteúdo da <div> com a opção selecionada
function alterarConteudo() {
    var opcaoSelecionada = document.getElementById("opcoes").value;
    var meudiv = document.getElementById("meudiv");
    // Altera o conteúdo da <div> de acordo com a opção selecionada
    switch (opcaoSelecionada){
        case "opcao1":
            meudiv.textContent = "Conteúdo da opção 1.";
            break;
            case "opcao2":
                meudiv.textContent = "Conteúdo da opção 2.";
                case "opcao3":
                    meudiv.textContent = "Conteúdo da opção 3.";
                    break;
                    default:
                        meudiv.textContent = "Conteúdo padrão.";
                        break;
    }
}
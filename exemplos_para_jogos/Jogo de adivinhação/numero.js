var num2;
tentativas = 0;
function dificuldade() {
    var _dificuldade = 0;
    tentativas=0
    var opcoes = document.getElementsByTagName("input");
    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i]['checked'])
            _dificuldade = opcoes[i].value;
    }
    var tela = document.getElementById("#tela");
    console.log(tela);
    tela.removeAttribute('hidden');

    switch (_dificuldade) {
        case 'facil': {
            num2 = Math.floor(Math.random() * 11);
            break;
        }
        case 'medio': {
            num2 = Math.floor(Math.random() * 101);
            break;
        }
        case 'dificil': {
            num2 = Math.floor(Math.random() * 1001);
            break;
        }
    }
    document.getElementById("btnResposta").addEventListener('click', checaNumero);
}
function checaNumero()
{
    var num = document.getElementById("resposta").value;
    tentativas = tentativas + 1;
    if (parseInt(num) == num2) { // Acertou
        alert("Parabéns você acertou em " + tentativas + " tentiva(s).");
    }
    else if (parseInt(num) < num2) { // Errou número menor
        alert("Errou, tente um numero MAIOR.");
    }
    else {
        alert("Errou, tente um numero MENOR.");
    }
}
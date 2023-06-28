function respostas() {
    var posicao = 0;
    var resp1 = document.formAdivinha.op1.value;
    var resp2 = document.formAdivinha.op2.value;
    var resp3 = document.formAdivinha.op3.value;
    var resp4 = document.formAdivinha.op4.value;
    if (resp1 == "Sim") posicao = posicao + 1;
    if (resp2 == "Sim") posicao = posicao + 2;
    if (resp3 == "Sim") posicao = posicao + 8;
    if (resp4 == "Sim") posicao = posicao + 4;
    if (posicao > 0) {
        document.write('<div style="background-color: #4682B4">');
        document.write('<center><h2>A imagem que você pensou foi: </h2> ');
        if (posicao == 1) document.write('<img src="imagens_jogo/1.png">');
        if (posicao == 2) document.write('<img src="imagens_jogo/2.png">');
        if (posicao == 3) document.write('<img src="imagens_jogo/3.png">');
        if (posicao == 4) document.write('<img src="imagens_jogo/4.png">');
        if (posicao == 5) document.write('<img src="imagens_jogo/5.png">');
        if (posicao == 6) document.write('<img src="imagens_jogo/6.png">');
        if (posicao == 7) document.write('<img src="imagens_jogo/7.png">');
        if (posicao == 8) document.write('<img src="imagens_jogo/8.png">');
        if (posicao == 9) document.write('<img src="imagens_jogo/9.png">');
        if (posicao == 10) document.write('<img src="imagens_jogo/10.png">');
        if (posicao == 11) document.write('<img src="imagens_jogo/11.png">');
        if (posicao == 12) document.write('<img src="imagens_jogo/12.png">');
        if (posicao == 13) document.write('<img src="imagens_jogo/13.png">');
        if (posicao == 14) document.write('<img src="imagens_jogo/14.png">'); 
        if (posicao == 15) document.write('<img src="imagens_jogo/15.png">');
        document.write('<br /></br />');
        document.write('<img src="imagem/adivinhador.png" width="300" height="300" />');
        document.write('<br /><br /><a href=""><h3>Tentar Novamente!!!</h3></a>');
        document.write('</center> </div>');
    } else alert('Você não escolheu nenhuma carta');
}
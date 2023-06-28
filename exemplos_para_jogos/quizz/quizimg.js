function respostas() {
	var acertos = 0;
	var resp0 = document.formQuizz.r0.value;
	var resp1 = document.formQuizz.r1.value;
	var resp2 = document.formQuizz.r2.value;
	var resp3 = document.formQuizz.r3.value;
	var resp4 = document.formQuizz.r4.value;
	var resp5 = document.formQuizz.r5.value;
	var resp6 = document.formQuizz.r6.value;
	var resp7 = document.formQuizz.r7.value;
	var resp8 = document.formQuizz.r8.value;
	var resp9 = document.formQuizz.r9.value;
	var resp10 = document.formQuizz.r10.value;
	var result = "";
	var resposta = [];// resposta é uma variável vetor
	resposta[0] = "2";
	resposta[1] = "7";
	resposta[2] = "11";
	resposta[3] = "14";
	resposta[4] = "19";
	resposta[5] = "24";
	resposta[6] = "25";
	resposta[7] = "31";
	resposta[8] = "36";
	resposta[9] = "37";
	resposta[10] = "44";
	/*if((resp0.length==0)  /&&(resp1==null)&&(resp2==null)&&(resp3==null)&&(resp4==null)&&(resp5==null)&&(resp6==null)&&(resp7==null)&&(resp8==null)&&(resp9==null)&&(resp10==null)&&(resp11==null))
	{ alert("Vazio"); result="ok"; } */
	if ((resp0 == "") && (resp1 == "") && (resp2 == "") && (resp3 == "") && (resp4 == "") && (resp5 == "") && (resp6 == "") && (resp7 == "") && (resp8 == "") && (resp9 == "") && (resp10 == "")) result = "no";
	if (result != "no") {
		if (resp0 == resposta[0]) acertos = acertos + 1;//acertos++
		if (resp1 == resposta[1]) acertos = acertos + 1;
		if (resp2 == resposta[2]) acertos = acertos + 1;
		if (resp3 == resposta[3]) acertos = acertos + 1;
		if (resp4 == resposta[4]) acertos = acertos + 1;
		if (resp5 == resposta[5]) acertos = acertos + 1;
		if (resp6 == resposta[6]) acertos = acertos + 1;
		if (resp7 == resposta[7]) acertos = acertos + 1;
		if (resp8 == resposta[8]) acertos = acertos + 1;
		if (resp9 == resposta[9]) acertos = acertos + 1;
		if (resp10 == resposta[10]) acertos = acertos + 1;
		porcentagem = (acertos / 11) * 100;
		alert('Total de Acertos =' + acertos + ' com um total de ' + Math.round(porcentagem) + ' % '+ document.write('<img src="../../imagem/quizimg.png" height="600" width="500"><br><a href="../../index.html">voltar</a> '));
		if (Math.round(porcentagem) <= 31) alert('Que fraquinho, somente ' + Math.round(porcentagem) + ' % ');
		else if (Math.round(porcentagem) < 50) alert('Por pouco você não chegou a 50%, pois acertou somente ' + Math.round(porcentagem) + ' % ');
		else if (Math.round(porcentagem) <= 69) alert('Fez uma média razoável , entre 50% e 69%,pois acertou ' + Math.round(porcentagem) + ' % ');
		else if (Math.round(porcentagem) <= 79) alert('Está legalzinho , ficou entre 50% e 79%, pois acertou ' + Math.round(porcentagem) + ' % ');
		else if (Math.round(porcentagem) <= 89) alert('Está bem , ficou entre 80% e 89%, pois acertou ' + Math.round(porcentagem) + ' % ');
		else if (Math.round(porcentagem) <= 95) alert('Muito bom , ficou entre 90% e 95%, pois acertou ' + Math.round(porcentagem) + ' % ');
		else alert('Excelente, você é um expert  ,  pois acertou ' + Math.round(porcentagem) + ' % ');
	} else alert("Você não escolheu nada !!!")
}
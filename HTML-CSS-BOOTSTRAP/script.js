var jogavel = document.getElementById("div-jogavel");
document.getElementById("div-jogavel").parentNode.removeChild(document.getElementById("div-jogavel"));

function bgNaruto(){
	document.getElementById('bg-alteravel').src='imagens/bg-naruto-sm.png';
	document.body.style.background = '#FF9432';
	document.getElementById('info').style.background = '#ffda91';
	document.getElementById('titulo').style.color = '#ffda91';
	document.getElementById('jogar').src='imagens/botao-jogar.png';
}
				
function bgPokemon(){
	document.getElementById('bg-alteravel').src='imagens/bg-pokemon-sm.png';
	document.body.style.background = '#D7F2B1';
	document.getElementById('info').style.background = '#A7D774';
	document.getElementById('titulo').style.color = '#A7D774';
	document.getElementById('jogar').src='imagens/botao-jogar-p.png';
}

function bgYugi(){
	document.getElementById('bg-alteravel').src='imagens/bg-yugi-sm.png';
	document.body.style.background = '#0785B5';
	document.getElementById('info').style.background = '#ACD9D6';
	document.getElementById('titulo').style.color = '#ACD9D6';
	document.getElementById('jogar').src='imagens/botao-jogar-y.png';
}

function iniciarJogo(){
	document.getElementById("info").parentNode.removeChild(document.getElementById("info"));
	document.body.append(jogavel);

}


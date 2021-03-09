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

var numCartas = 0;
var dificuldade = 0;
function habilitaDeck() {	
	var display = document.getElementById("habilitadivdecks").style.display;
	if(display == "none")
        document.getElementById("habilitadivdecks").style.display = '';
	
	if(dificuldade == 1) {
		numCartas = 12;
	}
	else if(dificuldade == 2) {
		numCartas = 24;
	}
	else {
		numCartas = 48;
	}
}

var tamanhoCarta;
function buscaValueDificFacil() {
	dificuldade = document.getElementById("facil").getAttribute("value");
	document.getElementById("medio").style = `display:none`;
	document.getElementById("dificil").style = `display:none`;
	document.getElementById("divbuttondificuldadeesq").style = `display:none`;
	document.getElementById("divbuttondificuldadedir").style = `display:none`;
	tamanhoCarta = "width=\"160px\" height=\"240px\"";
	habilitaDeck();
}

function buscaValueDificMedio() {
	dificuldade = document.getElementById("medio").getAttribute("value");
	document.getElementById("facil").style = `display:none`;
	document.getElementById("dificil").style = `display:none`;
	document.getElementById("divbuttondificuldadeesq").style = `display:none`;
	document.getElementById("divbuttondificuldadedir").style = `display:none`;
	tamanhoCarta = "width=\"160px\" height=\"240px\"";
	habilitaDeck();
}

function buscaValueDificDificil() {
	dificuldade = document.getElementById("dificil").getAttribute("value");
	document.getElementById("medio").style = `display:none`;
	document.getElementById("facil").style = `display:none`;
	document.getElementById("divbuttondificuldadeesq").style = `display:none`;
	document.getElementById("divbuttondificuldadedir").style = `display:none`;
	tamanhoCarta = "width=\"160px\" height=\"240px\"";
	habilitaDeck();
}

var deckBaralho;
var name;
function baralhoNaruto() {
	deckBaralho = cardsNaruto[24].path;
	name = "naruto";
	document.getElementById("divbuttonbaralhoesq").style = `display:none`;
	document.getElementById("buttonpokemon").style = `display:none`;
	document.getElementById("divbuttonbaralhodir").style = `display:none`;
	document.getElementById("buttonyugioh").style = `display:none`;
	habilitaBotaoJogar();
}

function baralhoPokemon() {
	deckBaralho = cardsPokemon[24].path;
	name = "pokemon";
	document.getElementById("divbuttonbaralhoesq").style = `display:none`;
	document.getElementById("buttonnaruto").style = `display:none`;
	document.getElementById("divbuttonbaralhodir").style = `display:none`;
	document.getElementById("buttonyugioh").style = `display:none`;
	habilitaBotaoJogar();
}

function baralhoYugioh() {
	deckBaralho = cardsYugioh[24].path;
	name = "yugioh";
	document.getElementById("divbuttonbaralhoesq").style = `display:none`;
	document.getElementById("buttonpokemon").style = `display:none`;
	document.getElementById("divbuttonbaralhodir").style = `display:none`;
	document.getElementById("buttonnaruto").style = `display:none`;
	habilitaBotaoJogar();
}

function habilitaBotaoJogar() {
	document.getElementById("botao-jogar").style.display = '';
}

function cartas(){
		
	var baralhoEmbaralhado = embaralharCartas();
	var i;
	
	for(i = 0; i < numCartas; i++) {		
		document.getElementById("baralho").innerHTML += `
			<img style="border-style: solid;  border-width: 2px;" name="${name}"
			src="${deckBaralho}" ${tamanhoCarta} id="${i}"
			onclick="cartasChange(this.alt,this.id,this.name), comparaCartas(this.id)"			
			alt="${baralhoEmbaralhado[i]}">`;
	}
	document.getElementById("buttoninicia").onclick = '';
}

function cartasChange(alt,id,name){
	
	if(name == "naruto") {
		document.getElementById(id).src = `${cardsNaruto[alt].path}`;		
	}else if(name == "pokemon") {
		document.getElementById(id).src = `${cardsPokemon[alt].path}`;
	}else {
		document.getElementById(id).src = `${cardsYugioh[alt].path}`;
	}	
}

function embaralharCartas() {
	if(numCartas == 12)
		var ordemCartas = [0,0,1,1,2,2,3,3,4,4,5,5];
	else if(numCartas == 24)
		var ordemCartas = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11];
	else
		var ordemCartas = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,
			13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23];
		
	var indice = ordemCartas.length, auxiliar, indiceAleatorio;

	while (indice !== 0) {
		indiceAleatorio = Math.floor(Math.random() * indice);
		indice -= 1;
		auxiliar = ordemCartas[indice];
		ordemCartas[indice] = ordemCartas[indiceAleatorio];
		ordemCartas[indiceAleatorio] = auxiliar;
	}
	return ordemCartas;	
}

var pontuacao = 0;
var numTentativas = 0;
var flagTime = false;
var numPares = 0;
var guardaId = [];
var arrayComparador = [];
var incrementa = 0;
function comparaCartas(id) {	
	guardaId.push(document.getElementById(id).getAttribute("id"));
	arrayComparador.push(document.getElementById(id).getAttribute("alt"));
	incrementa++;
	if(incrementa == 2) {	
		document.getElementById(guardaId[1]).addEventListener("onclick", function() {
			document.getElementById(guardaId[1]).onmouseout = 'comparaCartasFinal';
		});
	}
	console.log(guardaId[1] + "antes do if");
	if(incrementa == 2) {
		console.log(guardaId[1] + "dentro do if");
		console.log("Entrei no if()");
		if((arrayComparador[0] == arrayComparador[1]) && (guardaId[0] != guardaId[1])) {
			document.getElementById(guardaId[0]).onclick = ``;
			document.getElementById(guardaId[1]).onclick = ``;
			pontuacao++;
			document.getElementById("pontuacao").innerHTML = pontuacao;
			console.log("Você acertou um par");
		} else {
			if(flagTime == false) {
				flagTime = true;
				start();				
			}
			if(flagTime == true && numPares == (numCartas / 2))
				pause();
			numPares++;
			document.getElementById(guardaId[0]).src = `${deckBaralho}`;
			document.getElementById(guardaId[1]).src = `${deckBaralho}`;
		}
		numTentativas++;
		document.getElementById("tentativas").innerHTML = numTentativas;
		incrementa = 0;
		arrayComparador.pop();
		arrayComparador.pop();
		guardaId.pop();
		guardaId.pop();
		console.log(guardaId[1] + "depois do if");
		
	}	
	console.log("guardaId " + guardaId);
	console.log("Incremente " + incrementa);
	console.log(arrayComparador);
}

function comparaCartasFinal() {	
	console.log("Deu bom!!!");
}

var tempo = 1000;
var cronometro;

function start(){
    var cron_minutos = document.getElementById("minutos");
    var cron_segundos = document.getElementById("segundos");
    var m = 0;
    var s = 0;

   cronometro = setInterval(function() {
        cron_minutos.innerHTML = m < 10 ? '0'+ m : m;
        cron_segundos.innerHTML = s < 10 ? '0'+ s : s;

        if (s < 59) { s += 1}
        else if (m < 59) {s = 0; m+=1} 
    },tempo);
}

function pause(){  
    clearInterval(cronometro);
}

var jogavel = document.getElementById("div-jogavel");
document.getElementById("div-jogavel").style.display = 'none';

var numCartas = 0;
var tamanhoCarta;
function buscaDificuldade(value) { // Função parar selecionar a dificuldade
	if(value == 1) {
		document.getElementById("medio").style = `display:none`;
		document.getElementById("dificil").style = `display:none`;		
		tamanhoCarta = "width=\"160px\" height=\"240px\"";
		numCartas = 12;
	} else if(value == 2) {
		document.getElementById("facil").style = `display:none`;
		document.getElementById("dificil").style = `display:none`;		
		tamanhoCarta = "width=\"144px\" height=\"216px\"";
		numCartas = 24;
	} else {
		document.getElementById("medio").style = `display:none`;
		document.getElementById("facil").style = `display:none`;
		tamanhoCarta = "width=\"128px\" height=\"192px\"";
		numCartas = 48;
	}
	document.getElementById("divbuttondificuldadeesq").style = `display:none`;
	document.getElementById("divbuttondificuldadedir").style = `display:none`;	
	habilitaDeck();
}

var dificuldade = 0;
function habilitaDeck() { // Função para habilitar a escolha do temas do baralho
	var display = document.getElementById("habilitadivdecks").style.display;
	if(display == "none")
        document.getElementById("habilitadivdecks").style.display = '';	
}

function backgroundDeck(id){ // Função para dar um preview ao usuário dos temas de baralho
	if(id == "buttonnaruto") {
		document.getElementById('bg-alteravel').src='imagens/bg-naruto-sm.png';
		document.body.style.background = '#FF9432';
		document.getElementById('info').style.background = '#ffda91';
		document.getElementById('titulo').style.color = '#ffda91';
		document.getElementById('jogar').src='imagens/botao-jogar.png';
	} else if(id == "buttonpokemon") {
		document.getElementById('bg-alteravel').src='imagens/bg-pokemon-sm.png';
		document.body.style.background = '#D7F2B1';
		document.getElementById('info').style.background = '#A7D774';
		document.getElementById('titulo').style.color = '#A7D774';
		document.getElementById('jogar').src='imagens/botao-jogar-p.png';
	} else {
		document.getElementById('bg-alteravel').src='imagens/bg-yugi-sm.png';
		document.body.style.background = '#0785B5';
		document.getElementById('info').style.background = '#ACD9D6';
		document.getElementById('titulo').style.color = '#ACD9D6';
		document.getElementById('jogar').src='imagens/botao-jogar-y.png';
	}
}

var deckBaralho;
var name;
function baralhoDeck(id) { // Função pra selecionar o tema
	if(id == "buttonnaruto") {
		deckBaralho = cardsNaruto[24].path;
		name = "naruto";
		document.getElementById("buttonpokemon").style = `display:none`;
		document.getElementById("buttonyugioh").style = `display:none`;
	} else if(id == "buttonpokemon") {
		deckBaralho = cardsPokemon[24].path;
		name = "pokemon";
		document.getElementById("buttonnaruto").style = `display:none`;
		document.getElementById("buttonyugioh").style = `display:none`;
	} else {
		deckBaralho = cardsYugioh[24].path;
		name = "yugioh";
		document.getElementById("buttonpokemon").style = `display:none`;
		document.getElementById("buttonnaruto").style = `display:none`;
	}
	document.getElementById("divbuttonbaralhodir").style = `display:none`;
	document.getElementById("divbuttonbaralhoesq").style = `display:none`;
	habilitaBotaoJogar();
}

function habilitaBotaoJogar() { // Função para habilitar o botão
	document.getElementById("botao-jogar").style.display = '';
}

function iniciarJogo(){	// Função para ocultar os elementos de setup do jogo
	document.getElementById("info").style.display = 'none';
	document.getElementById("div-jogavel").style.display = '';
	cartas();
}

function cartas(){ // Função para chamar as iniciar o jogo
	var baralhoEmbaralhado = embaralharCartas();
	var i;	
	for(i = 0; i < numCartas; i++) {		
		document.getElementById("baralho").innerHTML += `
			<img style="border-style: solid;  border-width: 2px;"  
			name="${name}" class="sombra"
			src="${deckBaralho}" ${tamanhoCarta} id="${i}"
			onclick="cartasChange(this.alt,this.id,this.name), comparaCartas(this.id)"			
			alt="${baralhoEmbaralhado[i]}">`;
	}
	document.getElementById("buttoninicia").onclick = '';
}

function embaralharCartas() { // Função embaralhar as cartas
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

function cartasChange(alt,id,name){	// Função para virar as cartas ao serem clicadas
	if(name == "naruto") {
		document.getElementById(id).src = `${cardsNaruto[alt].path}`;		
	}else if(name == "pokemon") {
		document.getElementById(id).src = `${cardsPokemon[alt].path}`;
	}else {
		document.getElementById(id).src = `${cardsYugioh[alt].path}`;
	}	
}

var pontuacao = 0;
var numTentativas = 0;
var flagTime = false;
var numPares = 0;
var guardaId = [];
var arrayComparador = [];
var incrementa = 0;
function comparaCartas(id) { // Função para comparar a igualdade do par de cartas clicadas	
	guardaId.push(document.getElementById(id).getAttribute("id"));
	arrayComparador.push(document.getElementById(id).getAttribute("alt"));
	incrementa++;
	if(incrementa == 2) {	
		document.getElementById(guardaId[1]).addEventListener("onclick", function() {
			document.getElementById(guardaId[1]).onmouseout = 'comparaCartasFinal';
		});
	}	
	if(incrementa == 2) {	
		if(flagTime == false) {
			flagTime = true;
			startTime();
		}
		if((arrayComparador[0] == arrayComparador[1]) && (guardaId[0] != guardaId[1])) {			
			document.getElementById(guardaId[1]).class =+ `sombra-acerto:hover`;
			document.getElementById(guardaId[0]).class =+ `sombra-acerto:hover`;
			document.getElementById(guardaId[0]).onclick = ``;
			document.getElementById(guardaId[1]).onclick = ``;
			pontuacao++;
			document.getElementById("pontuacao").innerHTML = pontuacao;			
			numTentativas++;
			document.getElementById("tentativas").innerHTML = numTentativas;		
			arrayComparador.pop();
			arrayComparador.pop();
			guardaId.pop();
			guardaId.pop();			
			incrementa = 0;
		} else {
			setTimeout(
			function viraCartas(){
			document.getElementById(guardaId[0]).src = `${deckBaralho}`;
			document.getElementById(guardaId[1]).src = `${deckBaralho}`;
			arrayComparador.pop();
			arrayComparador.pop();
			guardaId.pop();
			guardaId.pop();
			incrementa=0;
			}, 500);
		}
		if(pontuacao == (numCartas / 2))
			pauseTime();
		numTentativas++;
		document.getElementById("tentativas").innerHTML = numTentativas;				
	}
}

var tempo = 1000;
var cronometro;
function startTime(){ //Função para iniciar o tempo
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

function pauseTime(){  // Função para encerrar o tempo
    clearInterval(cronometro);
}

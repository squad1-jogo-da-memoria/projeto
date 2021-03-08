var dificuldade = 0;
var numCartas = 0;
var tamanhoCarta;

function habilitaDeck() {
	var display = document.getElementById("habilitaDivDecks").style.display;
	if(display == "none")
        document.getElementById("habilitaDivDecks").style.display = '';
	
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

function buscaValueDificFacil() {
	dificuldade = document.getElementById("facil").getAttribute("value");
	tamanhoCarta = "width=\"160px\" height=\"240px\"";
	habilitaDeck();
}

function buscaValueDificMedio() {
	dificuldade = document.getElementById("medio").getAttribute("value");
	tamanhoCarta = "width=\"80px\" height=\"120px\"";
	habilitaDeck();
}

function buscaValueDificDificil() {
	dificuldade = document.getElementById("dificil").getAttribute("value");
	tamanhoCarta = "width=\"40px\" height=\"60px\"";
	habilitaDeck();
}

function cartasYuGiOh() {
	var baralhoEmbaralhado = embaralharCartas();
	var i;
	for(i = 0; i < numCartas; i++) {
		document.getElementById("baralho").innerHTML += `
			<img style="border-style: solid;  border-width: 2px;" name="yugiohDeck"
			src="${data[2].url}" ${tamanhoCarta} id="${i}"
			onclick="cartasChange(this.alt,this.id,this.name)" alt="${baralhoEmbaralhado[i]}">`;
	}		
}

function cartasPokemon() {
	var baralhoEmbaralhado = embaralharCartas();
	var i;
	for(i = 0; i < numCartas; i++) {
		document.getElementById("baralho").innerHTML += `
			<img style="border-style: solid;  border-width: 2px;" name="pokemonDeck"
			src="${data[1].url}" ${tamanhoCarta} id="${i}"
			onclick="cartasChange(this.alt,this.id,this.name)" alt="${baralhoEmbaralhado[i]}">`;
	}
}

function cartasNaruto(){
	var baralhoEmbaralhado = embaralharCartas();
	var i;
	
	for(i = 0; i < numCartas; i++) {		
		var auxiliarString = JSON.stringify(baralhoEmbaralhado[i]);		
		document.getElementById("baralho").innerHTML += `
			<img style="border-style: solid;  border-width: 2px;" name="narutoDeck"
			src="${data[0].url}" ${tamanhoCarta} id="${i}"
			onclick="cartasChange(this.alt,this.id,this.name), comparaCartas(this.id,this.alt)" 
			alt="${baralhoEmbaralhado[i]}">`;
	}
}

function cartasChange(alt,id,name){    	
	if(name == "narutoDeck") {
		document.getElementById(id).src = `${narutoDeck[alt].path}`
	}else if(name == "pokemonDeck") {
		document.getElementById(id).src = `${pokemonDeck[alt].path}`
	}else {
		document.getElementById(id).src = `${yugiohDeck[alt].path}`
	}	
}

function embaralharCartas() {
	var ordemCartas = [0,0,1,1,2,2,3,3,4,4,5,5];
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
/*
document.getElementById(guardaId[0]).src = `${data[0].url}`;
document.getElementById(guardaId[1]).src = `${data[0].url}`;
*/
var guardaId = [];
var arrayComparador = [];
var incrementa = 0;
function comparaCartas(id) {	
	guardaId.push(document.getElementById(id).getAttribute("id"));
	arrayComparador.push(document.getElementById(id).getAttribute("alt"));
	incrementa++;
	if(incrementa == 2) {
		if(arrayComparador[0] == arrayComparador[1]) {
			console.log("Você acertou um par");
		} else {
			/*setTimeout(openWin(), 1000);*/
			var my = setInterval(cartaVirada, 1000);			
		}
		incrementa = 0;
		arrayComparador.pop();
		arrayComparador.pop();
		guardaId.pop();
		guardaId.pop();
	}	
	console.log("guardaId " + guardaId);
	console.log("Incremente " + incrementa);
	console.log(arrayComparador);
}

function cartaVirada() {
	document.getElementById(guardaId[0]).src = `${data[0].url}`;
	document.getElementById(guardaId[1]).src = `${data[0].url}`;
}
function carregaJSON() {
	var dados = JSON.parse(data);
	console.log(dados);
	/*
	fetch(`${filename}`)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		dados = data
	})
	.catch(error => console.error(error));
	*/
}

function cartasYuGiOh() {
	document.getElementById("cartas").innerHTML += `
	<div class="card"><img src="${data[2].url}"  width="100%" height="100%"></div>`	
}

function cartasPokemon() {
	document.getElementById("cartas").innerHTML += `
	<div class="card"><img src="${data[1].url}"  width="100%" height="100%"></div>`	
}
/*
function cartasNaruto() {
	alert("Estou sendo chamado");
}
*/
function cartasNaruto(){
	document.getElementById("cartas").innerHTML += `
	<div class="card"><img src="${data[0].url}" width="100%" height="100%"></div>`	
}


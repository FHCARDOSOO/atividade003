let nome = document.getElementById('nome')
let email = document.getElementById('email')
let envio = document.querySelector('button')
let formulario = document.querySelector('form')

envio.onclick = function(){
	if(nome == ''){
		alert('Digite o nome!');
	}
}


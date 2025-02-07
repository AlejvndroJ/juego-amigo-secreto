// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let campo = document.getElementById('amigo');
let lista = document.querySelector('#listaAmigos');
let result = document.getElementById('resultado');
let reinicio = document.querySelector('#reinicio');

//Funcion para agregar amigos
function agregarAmigo() {
    //Verificación para determinar si el campo esta vacío
    if (campo.value === '') {
        alert('Ingrese mínimo un nombre')
    } else {
        //Los datos del campo son recibidos
        amigos.push(campo.value);
        campo.value = '';
        listaAmigos();
    }
}
//Funcion para crear la lista de amigos
function listaAmigos() {
    lista.innerHTML = ''
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        let nombre = document.createElement('li');
        nombre.textContent = amigo;
        lista.appendChild(nombre);
    }
}
//Funcion para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
    } else {
        let i = Math.floor(Math.random() * amigos.length);
        let nombreElegido = amigos[i];
        result.textContent = `Amigo Secreto elegido es: ${nombreElegido}`;
        reinicio.classList.remove('hidden');
        reinicio.classList.add('button-draw');
        lista.innerHTML='';
    }
}
//Funcion para reiniciar el juego
function reiniciarJuego() {
    
    campo.value = '';
    result.innerHTML = '';
    amigos = [];
    lista.innerHTML = '';
    reinicio.classList.add('hidden');
    reinicio.classList.remove('button-draw');
    
}
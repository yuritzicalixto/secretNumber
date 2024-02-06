//Declarar variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados= [];
let numeroMaximo= 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     console.log(numeroSecreto);
//El usuario no acerto
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //Obten el elemento por id para activar el boton Nuevo Juego, removiendo el atritubo disabled
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        //Llamamos a la función cuando el user no acierta para limpiar caja
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //con esto le decimos que use el id del input usuando querySelector
    document.querySelector('#valorUsuario').value = '';
    
}

//Función de IntentoUser
 function intentoUser(){
     alert('Click desde el boton');
 }

//Generará un número aletorio
function generarNumeroSecreto(){
    // let numeroSecreto = Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Mostrar el numero generado
    console.log(numeroGenerado)
    //Como va creciendo la lista
    console.log(listaNumerosSorteados)
    //si ya sorteamos todos los numeros, hacemos esto
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } //Si no, seguimos jugando 
    else {
    //Si el numeroGenerado esta incluida en la lista, hago algo sino sigo comportandome igual
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento( 'h1' , "Juego del numero secreto");
    asignarTextoElemento( 'p' , `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo numerico
    //Generar el numero aletorio
    //Inicializar el numero de intento
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    
}

condicionesIniciales();
//Declarar variables
let numeroSecreto = 0;
let intentos = 0;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroSecreto);
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
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento( 'h1' , "Juego del numero secreto");
    asignarTextoElemento( 'p' , "Indica un numero del 1 al 10");
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
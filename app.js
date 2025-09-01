//Son las variables que se van a estar utilizando
let numeroSecreto = generarNumeroSecreto();
//Se inicializa una variable en 0  para saber los intentos que se realizan para adivinar el numero 
let intentos = 0;

/*vamos a crear una funcion en la que vamos a llamarla "asignarTextoElemento" a la cual le vamos 
a pasar los parametros que son "elemento" y "texto"
Para que le pasamos los parametros?? el elemento es para el numero y el de texto es para que sea un parametro que pueda 
cambiar el texto segun las veces que se intetaron para decifrar el numero oculto
*/
function asignarTextoElemento(elemento, texto) {
// Definimos la función "asignarTextoElemento" que recibe dos parámetros:
// - elemento: un string que indica el selector CSS (ej. "#id", ".clase", "h1").
// - texto: el contenido que se va a mostrar dentro del elemento encontrado.
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Esta funcion es para verificar cuantos intentos realiza el usuario
function verificarIntento() {//j
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    https://github.com/AmbarItzel/Jueg_adivinan_2/edit/main/app.js
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó, es decir, que el numero sea menor
        if (numeroDeUsuario > numeroSecreto) {
            //Asigna en un parrafo el siguente texto
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            //Asigna en un parrafo el siguente texto
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        //Se limpia el cuadro de texto cada que se hace un intento
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
//Te regresa a que se pueda volver a iniciar el juego

condicionesIniciales();

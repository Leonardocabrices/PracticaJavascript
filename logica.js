//Bienvenido a este juego jr de JavaScript

//Presentacion de variables para las variables de identificacion del jugador

let nombreJugador = "";
const regex = /^[a-zA-Z]{3,10}$/;
while(!regex.test(nombreJugador)) {
  nombreJugador = prompt('Cual es tu nombre?');
  if (regex.test(nombreJugador) === false) {
    alert('Entrada denegada: ');
    alert("El nombre debe tener al menos 3 caracteres o un aproximado de 10. Evita el uso de números y por favor, ingresa tu nombre correctamente.");
  }
  else{
    alert('Entrada válida - Haz tu mejor esfuerzo');
    let resultado = document.querySelector("#nombreParticipante".trim());
    resultado.textContent = nombreJugador;
  }
    }

////////////////////////////////////////////////////////////////

//Script para el contador del tiempo

// Obtener los elementos span
var minutos = document.getElementById("minutes");
var segundos = document.getElementById("seconds");

// Establecer el tiempo inicial en segundos
var totalSegundos = 60; // 60 segundos, equivalente a 1 minuto

// Actualizar el tiempo en intervalos regulares
var tiempoInterval = setInterval(function() {
  // Descuento de 1 segundo
  totalSegundos--;

  // Convertir los segundos restantes en minutos y segundos
  var minuto = Math.floor(totalSegundos / 60);
  var segundo = totalSegundos;

  // Actualizar el valor de los elementos span
  minutos.innerHTML = minuto.toString().padStart(2, "0");
  segundos.innerHTML = segundo.toString().padStart(2, "0");

  // Detener el intervalo cuando llegue a cero
  if (totalSegundos <= 0) {
    audioPerder();
    clearInterval(tiempoInterval);
    alert("Game Over!");
    deshabilitarInputs();
  }
  
}, 1000);


// Mostrar respuestas en nueva ventana
let resultadoInput1 = document.getElementById("pregunta1");

const valorIngresado = document.getElementsByTagName("li");

valorIngresado.textContent = resultadoInput1.value;

let resultadoInput2 = document.getElementById("pregunta2");
let resultadoInput3 = document.getElementById("pregunta3");
let resultadoInput4 = document.getElementById("pregunta4");
let resultadoInput5 = document.getElementById("pregunta5");
let select = document.getElementById("pregunta6");
function detenerTiempo(){
  clearInterval(tiempoInterval);
  var miventana = window.open("", "miVentana", "width=500,height=310");
  
  miventana.document.write("<h1>"+ "Tus respuestas fueron las siguientes: " + "</h1>") + "<br>";
  miventana.document.write("<li>"+ resultadoInput1.value + "</li>") + "<br>";
  miventana.document.write("<li>"+ resultadoInput2.value + "</li>") + "<br>";
  miventana.document.write("<li>"+ resultadoInput3.value + "</li>") + "<br>";
  miventana.document.write("<li>"+ resultadoInput4.value + "</li>") + "<br>";
  miventana.document.write("<li>"+ resultadoInput5.value + "</li>") + "<br>";
  miventana.document.write("<li>"+ select.value + "</li>") + "<br>";
  
  miventana.document.body.style.backgroundImage = "url('/imagenes/SL-102521-46370-07.jpg')";
  miventana.document.body.style.backgroundSize = "100%";
  miventana.document.body.style.color = "white";
  miventana.document.body.style.border = "3px solid black";
  miventana.document.body.style.margin = "0px auto";
  miventana.document.body.style.display = "justify-content: 'center'";
}

function volverIntentar () {
  location.reload();
}
function deshabilitarInputs (){

  var inputs = document.getElementsByClassName("input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  
}
}
function audioPerder() {
  document.getElementById("audioFinal").play();
}
  
var botonEnvio = document.getElementById("botonFormulario");

botonEnvio.addEventListener("click", detenerTiempo);

var botonReinicio  = document.getElementById("botonReintentar");

botonReinicio.addEventListener("click", volverIntentar);


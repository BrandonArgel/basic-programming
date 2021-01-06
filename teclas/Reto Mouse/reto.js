var estado = 0;          // estado del click      
var colorLinea = "cyan";    // color a la linea

//Variables de los botones
var botonRojo = document.getElementById("boton_red");
botonRojo.addEventListener("click", cheangeColorRed);

var botonAzul = document.getElementById("boton_blue");
botonAzul.addEventListener("click", cheangeColorBlue);

var botonCyan = document.getElementById("boton_cyan");
botonCyan.addEventListener("click", cheangeColorCyan);

//Cambiar color que quieras
var new_color = document.getElementById("color_wanted");
var boton = document.getElementById("boton_change");
boton.addEventListener("click", cambiarColorsito);

var area = document.getElementById("area_dibujo");
var papel = area.getContext("2d");
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// dibujo del borde
dibujarLinea(colorLinea, 0, 0, 600, 0, papel)
dibujarLinea(colorLinea, 600, 0, 600, 600, papel)
dibujarLinea(colorLinea, 600, 600, 0, 600, papel)
dibujarLinea(colorLinea, 0, 600, 0, 0, papel)

// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

//Funciones para cambiar colores

function cheangeColorRed(){
    colorLinea = "red";
}

function cheangeColorBlue(){
    colorLinea = "blue";
}

function cheangeColorCyan(){
    colorLinea = "Cyan";
}

function cambiarColorsito(){
    var line_color = new_color.value;
    colorLinea = line_color;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 2;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}
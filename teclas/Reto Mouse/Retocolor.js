var estado = 0;          // estado del click      
var colorLinea = "cyan";    // color a la linea

var area = document.getElementById("area_dibujo");
var papel = area.getContext("2d");
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

//Variables para el cambio de color
var new_color = document.getElementById("color_dibujo");
area.addEventListener("mouseover", cambiarColorsito);

//Variables para cambiar el grosor de la línea
var grosor;
var strokeLine = document.getElementById("stroke_line");
area.addEventListener("mouseover", cambiarGrosor);

// dibujo del borde
dibujarLinea(colorLinea, 0, 0, 1300, 0, papel)
dibujarLinea(colorLinea, 1300, 0, 1300, 500, papel)
dibujarLinea(colorLinea, 1300, 500, 0, 500, papel)
dibujarLinea(colorLinea, 0, 500, 0, 0, papel)

//Funcion para cambiar color
function cambiarColorsito(event){

    colorLinea = new_color.value;
    console.log(event);
    console.log(colorLinea);
}

//Función para cambiar el grosor
function cambiarGrosor(event){

    grosor = strokeLine.value
}

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

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = grosor;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}
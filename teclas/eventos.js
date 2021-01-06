var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var ancho = area_de_dibujo.width;
var x = 250 , y = 250;
var colorsito = "cyan";

//Cambiar color de la línea Variables
var new_color = document.getElementById("color_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", cambioDeColor);

dibujarLinea(colorsito, 249, 249, 251, 251, papel);
dibujarLinea(colorsito, 1, 1, 1, ancho-1, papel)
dibujarLinea(colorsito, 1, ancho-1, ancho-1, ancho-1, papel)
dibujarLinea(colorsito, ancho-1, ancho-1, ancho-1, 1, papel)
dibujarLinea(colorsito, 1, 1, ancho-1, 1, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}

function cambioDeColor(){
    var line_color = new_color.value;
    colorsito = line_color;
    console.log(line_color);
}

function dibujarTeclado(evento)
{
    var movimiento = 10;

        switch(evento.keyCode)
        {
             case teclas.UP:
                dibujarLinea(colorsito, x, y, x, y - movimiento, papel)
                y = y - movimiento;
            break;

            case teclas.DOWN:
                dibujarLinea(colorsito, x, y, x, y + movimiento, papel)
                y = y + movimiento;
                break;

            case teclas.LEFT:
                dibujarLinea(colorsito, x, y, x - movimiento, y, papel)
                x = x - movimiento;
                break;

            case teclas.RIGHT:
                dibujarLinea(colorsito, x, y, x + movimiento, y, papel)
                x = x + movimiento;
                break;
        }
}
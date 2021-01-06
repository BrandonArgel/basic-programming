var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l;
    var colorcito = "cyan";
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
    dibujarLinea(colorcito, 0, espacio * l, espacio * (l + 1), 500);
    dibujarLinea(colorcito, espacio * l, 0, 500, espacio * (l + 1));
    dibujarLinea(colorcito, 0, 500 - espacio * l, espacio * l, 0);
    dibujarLinea(colorcito, espacio * l, 500, 500, 500 - espacio * l);
    }

    dibujarLinea(colorcito, 1, 1, 1, ancho-1)
    dibujarLinea(colorcito, 1, ancho-1, ancho-1, ancho-1)
    dibujarLinea(colorcito, ancho-1, ancho-1, ancho-1, 1)
    dibujarLinea(colorcito, 1, 1, ancho-1, 1)

}
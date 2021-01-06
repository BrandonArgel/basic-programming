var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var xLobo = 150;
var yLobo = 100;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverLobo(e)
{
	var movimiento = 10;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(e.keyCode)
	{
		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
	}
}

var fondo =
{
	url: "images/tile.png",
	carga: false
}

var lobo =
{
	url: "images/lobo.png",
	carga: false
}

var vaca =
{
	url: "images/vaca.png",
	carga: false
}

var pollo =
{
	url: "/imagespollo.png",
	carga: false
}

var cerdo =
{
	url: "images/cerdo.png",
	carga: false
}

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargaLobo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargaFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargaVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargaPollo);

function cargaLobo()
{
	lobo.carga = true;
	dibujar();
}

function cargaFondo()
{
	fondo.carga = true;
	dibujar();
}

function cargaPollo()
{
	pollo.carga = true;
	mantenerPosicion();
}

function cargaCerdo()
{
	cerdo.carga = true;
	mantenerPosicion();
}

function cargaVaca()
{
	vaca.carga = true;
	mantenerPosicion();
}

function mantenerPosicion()
{
	if(vaca.carga)
	{
		var cantidad = aleatorio(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xVaca[i] = x;
			yVaca[i] = y; 		
		}
	}
	if(cerdo.carga)
	{
		var cantidad = aleatorio(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xCerdo[i] = x;
			yCerdo[i] = y; 		
		}
	}
	if(pollo.carga)
	{
		var cantidad = aleatorio(1, 10);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xPollo[i] = x;
			yPollo[i] = y; 		
		}
	}
	dibujar();
}

function dibujar()
{
	if(fondo.carga)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);		
		}
	}
	if(cerdo.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);		
		}
	}
	if(pollo.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);		
		}
	}
	if(lobo.carga)
	{
		papel.drawImage(lobo.imagen, xLobo, yLobo)
	}
}

function aleatorio(max, min)
{
	var numero_aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
	return numero_aleatorio;
}
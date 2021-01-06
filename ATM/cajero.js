//Clases de las imágenes
var imagenes = [];
imagenes["1000"] = "billete1000.png";
imagenes["500"] = "billete500.png";
imagenes["200"] = "billete200.png";
imagenes["100"] = "billete100.png";
imagenes["50"] = "billete50.png";
imagenes["20"] = "billete20.png";
imagenes["10"] = "moneda10.png";
imagenes["5"] = "moneda5.png";
imagenes["2"] = "moneda2.png";
imagenes["1"] = "moneda1.png";

//Clases del dinero
class Billetes {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

class Monedas {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

//Saldo actual funcion
function imprimirSaldo() {
  var totalb = 0;
  var totalm = 0;

  for (var bill of caja) {
    totalb += bill.valor * bill.cantidad;
  }

  for (var mon of cajita) {
    totalm += mon.valor * mon.cantidad;
  }

  total = totalb + totalm;
  resultado.innerHTML =
    "Tu saldo actual es de: <strong>$" + total + ".00</strong><br />";
}

//Ciclo
function entregarDinero() {
  var imprimiendo = [];

  var z = document.getElementById("dinero");
  var dinero = Number(z.value);
  var dineros = dinero;

  if (dineros > total) {
    resultado.innerHTML =
      "Lo siento, no tienes suficiente dinero en tu cuenta. Tu saldo actual es de: <strong>$" +
      total +
      ".00</strong><br />";
  } else {
    for (var bi of caja) {
      if (dineros > 0) {
        division = Math.floor(dineros / bi.valor);
        if (division > bi.cantidad) {
          papeles = bi.cantidad;
        } else {
          papeles = division;
        }

        for (var i = 0; i < papeles; i++) {
          imprimiendo.push(new Billetes(bi.valor, 1));
        }

        dineros -= bi.valor * papeles;

        if (dineros <= total) {
          total -= bi.valor * papeles;
          bi.cantidad -= papeles;
        }
      }
    }

    for (var mo of cajita) {
      if (dineros > 0) {
        division = Math.floor(dineros / mo.valor);
        if (division > mo.cantidad) {
          monedas = mo.cantidad;
        } else {
          monedas = division;
        }

        for (var i = 0; i < monedas; i++) {
          imprimiendo.push(new Monedas(mo.valor, 1));
        }

        dineros -= mo.valor * monedas;

        if (dineros <= total) {
          total -= mo.valor * monedas;
          mo.cantidad -= monedas;
        }
      }
    }

    if (dinero == 0) {
      console.log("No");
    } else if (dineros == 0 && total >= dineros) {
      resultado.innerHTML =
        "Tu saldo actual es de: <strong>$" + total + ".00</strong><br />";
      ret.innerHTML += "Se ha retirado: <br />";

      for (var imp of imprimiendo) {
        ret.innerHTML += "<img src=" + imp.imagen.src + " />";
      }
      ret.innerHTML += "<hr />";
    }
  }
}

//Variable en la que se guarda el resultado
var entregado = [];

//Variable en la que tenemos los billetes y monedas
var caja = [];
caja.push(new Billetes(1000, 11));
caja.push(new Billetes(500, 10));
caja.push(new Billetes(200, 10));
caja.push(new Billetes(100, 11));
caja.push(new Billetes(50, 10));
caja.push(new Billetes(20, 11));

var cajita = [];
cajita.push(new Monedas(10, 10));
cajita.push(new Monedas(5, 10));
cajita.push(new Monedas(2, 10));
cajita.push(new Monedas(1, 10));

//Variables para el ciclo for
var division = 0;
var papeles = 0;
var monedas = 0;

var total;

//Evento click en botón
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

//Imprimir en pantalla
var r = document.getElementById("resultado");
var ret = document.getElementById("retirado");

var texto = document.getElementById("text");

var imagenes = [];
imagenes["Cauchin"] = "cerdo.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "vaca.png";
imagenes["Ferozin"] = "lobo.png";

class Pakiman {
  constructor(nombre, vida, ataque) {
    this.imagen = new Image();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;

    this.imagen.src = imagenes[this.nombre];
  }

  hablar() {
    alert(this.nombre);
  }

  mostrar() {
    texto.innerHTML += `
            <div class="pakimanes">
            <img src="${this.imagen.src}"; />
            <br />
            <strong>${this.nombre}</strong>
            <br />
            ${this.vida}
            <br />
            ${this.ataque}
            </div>
            `;
  }
}

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
coleccion.push(new Pakiman("Ferozin", 60, 100));

for (var brandon of coleccion) {
  brandon.mostrar();
}

/*
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<br /><hr />");
*/

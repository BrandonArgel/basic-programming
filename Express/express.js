var express = require("express");
var aplicacion = express();
var x = "...";
var cinco = "t";
var dos = "e";
var tres = "m";
var uno = "y";
var cuatro = "a";

aplicacion.get("/", inicio);
aplicacion.get("/x", xy);

function inicio(peticion, resultado)
{

    resultado.send(`<h1 style="color: pink"><strong>${x}</strong></h1>`);
}

function xy(peticion, resultado)
{
    resultado.send(`<h1 style="color: pink"><strong>${uno}${dos}${tres}${cuatro}${cinco}</strong></h1>`);
}

aplicacion.listen(8989);
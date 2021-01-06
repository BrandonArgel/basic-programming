var resultado = document.getElementById("resultado");
var bancos = ["Bancomer", "Banamex", "Santander"];
var opcionBanco = bancos.length;
var seleccionBancoCliente = Math.floor(Math.random()*opcionBanco);
var seleccionBancoDestino = Math.floor(Math.random()*opcionBanco);

var bancoCliente = seleccionBancoCliente;
var cuentaCliente = true;
var saldoCliente = Math.round(Math.random()*3000000);
var bancoDestino = seleccionBancoDestino;
var cuentaDestino = true;
var transferencia = 1000000;
var costoTransferencia = 100;

var hora = Math.round(Math.random()*23);

if(hora >= 12 && hora < 24)
{
    document.write("Son las   <strong>" + hora + ":00 pm</strong> <hr />");
}
else
{
    document.write("Son las   <strong>" + hora + ":00 am</strong> <hr />");
}

document.write("El saldo del cliente actual es:  <strong>" + saldoCliente + ".</strong> <hr />");

if(hora >= 9 && hora <= 12 || hora >= 15 && hora <= 20 && cuentaCliente == true && cuentaDestino == true && saldoCliente >= (transferencia + costoTransferencia))
{
    
    if(cuentaCliente == true && cuentaDestino == true)
    {
        console.log("Cuenta OK");
        if(saldoCliente >= (transferencia + costoTransferencia))
        {
            console.log("Cuenta OK");
            if(bancoCliente == bancoDestino)
            {
                resultado.innerHTML = ("Transferencia realizada sin costo adicional! <hr />");   
            }
            else
            {
                resultado.innerHTML = ("El costo de su tranferencia es: <strong>" + (transferencia + costoTransferencia), "</strong> <hr />");   
            }
        }
        else
        {
            resultado.innerHTML = ("Lo sentimos! <strong>Fondos insuficientes.</strong> <hr />");   
        }
    }
    else
    {
        resultado.innerHTML = ("Cliente o Destino NO verficado! <hr />");   
    }
}
else
{
    resultado.innerHTML = ("La hora no esta dentro del horario de atención! <strong>Recuerde que el horario es de 9 a 12 y de 15 a las 20 horas.</strong> <hr />");   
} 
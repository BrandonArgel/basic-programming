var resultado = document.getElementById("resultado");
var bancos = ["Bancomer", "Banamex", "Santander"];
var opcionBanco = bancos.length;
var seleccionBancoCliente = Math.floor(Math.random() * opcionBanco);
var seleccionBancoDestino = Math.floor(Math.random() * opcionBanco);

var bancoCliente = seleccionBancoCliente;
var cuentaCliente = true;
var saldoCliente = Math.round(Math.random() * 3000000);
var bancoDestino = seleccionBancoDestino;
var cuentaDestino = true;
var costoTransferencia = 100;
var dinero;
var hora = Math.round(Math.random() * 23);

if (hora >= 12 && hora < 24) {
    resultado.innerHTML += ("Son las   <strong>" + hora + ":00 pm</strong> <hr />");
}
else {

    resultado.innerHTML += ("Son las   <strong>" + hora + ":00 am</strong> <hr />");
}

if(hora >= 9 && hora <= 12 || hora >= 15 && hora <= 20) 
{
    resultado.innerHTML += ("El banco está abierto<br />");

    if (cuentaCliente == true && cuentaDestino == true) {
        resultado.innerHTML += ("El saldo actual del cliente es de:  <strong>$" + saldoCliente + ".00 pesos</strong><br />");
        var x = `<input type="number" id="dinero"><input type="button" value="Retirar" id="retirar">`;
        resultado.innerHTML += (x);
        var dd = document.getElementById("dinero");
        var d = Number(dd.value)
        var retiro = document.getElementById("retirar");
        retiro.addEventListener("click", retirarDinero);

        function retirarDinero() 
        {
            if(saldoCliente >= d.value && (bancoCliente == bancoDestino)) {
                saldoCliente -= d.value;
                resultado.innerHTML += ("<br />" + bancos[bancoCliente] + ": se han transferido: <strong>$" + d.value + ".00 </strong> pesos.");
                resultado.innerHTML += ("<br />Saldo actual: <strong>$" + saldoCliente + ".00 pesos</strong>");
            }
            else if(saldoCliente >= (d.value + costoTransferencia) && (bancoCliente != bancoDestino))
            {
                saldoCliente = saldoCliente - (d.value + costoTransferencia);
                resultado.innerHTML += ("<br /> Se han transferido: <strong>$" + d.value + ".00 </strong> pesos del banco: <strong>" + bancos[bancoCliente] + "</strong> al banco: <strong>" + bancos[bancoDestino] + "</strong> con un costo adicional de: <strong>$" + costoTransferencia + ".00 pesos por la transferencia.");
                resultado.innerHTML += ("<br />Saldo actual: <strong>$" + saldoCliente + ".00 pesos</strong>");
            }
            else if(saldoCliente < d.value)
            {
                resultado.inner += ("No cuentas con el crédito suficiente para realizar esa transacción, PONGASE A JALAR WE");
                resultado.innerHTML += ("<br />Saldo actual: <strong>$" + saldoCliente + ".00 pesos</strong>");
            }
        }
    }
}

else {
    resultado.innerHTML += ("Lo sentimos, el banco está cerrado");
}

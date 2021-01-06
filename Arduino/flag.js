var j = require("johnny-five");
var circuito = new j.Board();
var led, motor;
var turno = 0;

circuito.on("ready", prender);

function prender()
{
    var configuracion = {pin: "A0", freq: 50}
    celda = new j.Sensor(configuracion);

    led = new j.Led(13);
    led.on();

    motor = new j.Servo(9);
    motor.to(0);

    ondear();
}

function ondear()
{
  console.log("Luz: " + celda.value);
  var luz = celda.value;
  setTimeout(ondear, 1000);

  if(luz > 800)
  {
    if(turno == 1)
    {
      turno = 0;
      motor.to(70);
    }
    else
    {
        turno = 1;
        motor.to(110);
    }
  }
  else
  {
    motor.to(150);
  }
}

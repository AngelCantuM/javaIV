canvas = document.getElementById("alr");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var oop = canvas.getContext("2d");

var x = 0;

var speed2 = 2;

function Square() {
  oop.fillStyle = "blue";
  oop.fillRect(x, 10, 100, 100);
}

function drawBoxxy() {
  oop.clearRect(0, 0, canvas.width, canvas.height);
  Square();


  while (x + speed2 > canvas.width || x + speed2 < 0) {
    speed2 = -speed2;
  }
  x += speed2;
  console.log(speed2 + "  speed2 value");
}

setInterval(drawBoxxy, 10);

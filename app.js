var img = "./assets/img/sofa.svg";
var imgGif = "./assets/img/sofa.gif";

var svg = "./assets/img/three-hundred-and-sixty.svg"
var close = "./assets/img/close.svg";

function trocar() {
  document.getElementById('sofa').src = img;
  document.getElementById('svg').src = svg;
  let aux = img;
  img = imgGif;
  imgGif = aux;

  let aux2 = svg;
  svg = close;
  close = aux2;
}
var click = 0;
var contadorDeClicks = document.body;
var escribirTweet = document.getElementById("escribir");

contadorDeClicks.addEventListener("click", clicks);
escribirTweet.addEventListener("keyup", contadorDeCaracteres);

function contadorDeCaracteres(){
  var numeroCaracteres = escribirTweet.value.length;
  document.getElementById("caracteres").innerText = numeroCaracteres;
}

function clicks(){
  click++;
  document.getElementById("contadorDeClicks").innerText = click;
}

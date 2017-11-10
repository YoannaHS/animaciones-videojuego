var personajes = document.querySelectorAll(".personaje");
for (var i = 0; i< personajes.lenght; i++) {
  personajes[i].addEventListener("click", monstrarInfoPersonaje);
}

function monstrarInfoPersonaje() {

  var nombre = this.dataset.nombre;
  var fecha = this.dataset.fecha;

  var parrafoInfo = document.createElement("p");
  parrafoInfo.classList.add("active");
  parrafoInfo.innerText = "Su nombre es " + nombre +" y su primera aparición fue en " + fecha;

  var espacio = document.querySelector(".informacion");
  espacio.appendChild(parrafoInfo);

  var infoVisible = document.querySelectorAll("p.active");
  infoVisible.classList.remove("active");
}

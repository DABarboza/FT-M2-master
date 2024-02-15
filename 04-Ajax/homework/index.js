document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", obtenerYMostrarAmigos);
});

function obtenerYMostrarAmigos() {
  fetch("http://localhost:5000/amigos")
    .then((response) => response.json())
    .then(mostrarAmigos);
}

function mostrarAmigos(amigos) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  amigos.forEach(agregarAmigoALista);
}

function agregarAmigoALista(amigo) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = amigo.name;
  lista.appendChild(li);
}

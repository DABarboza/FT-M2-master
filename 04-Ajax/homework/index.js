//* EVENTOS

document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", obtenerYMostrarAmigos);
});
document.addEventListener("DOMContentLoaded", function () {
  const botonBuscar = document.getElementById("search");
  botonBuscar.addEventListener("click", buscarAmigoPorId);
});
document.addEventListener("DOMContentLoaded", function () {
  const botonBorrar = document.getElementById("delete");
  botonBorrar.addEventListener("click", borrarAmigoPorId);
});

//* FUNCIONES GET LISTA AMIGOS

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

//* FUNCIONES MOSTRAR AMIGO POR ID

function buscarAmigoPorId() {
  const inputId = document.getElementById("input");
  const id = inputId.value;

  fetch(`http://localhost:5000/amigos/${id}`)
    .then((response) => response.json())
    .then(mostrarAmigoEnDOM);
}

function mostrarAmigoEnDOM(amigo) {
  const amigoSpan = document.getElementById("amigo");
  amigoSpan.textContent = amigo.name;
}

function mostrarResultadoBusqueda(amigo) {
  const resultadoParrafo = document.getElementById("resultadoBusqueda");
  resultadoParrafo.textContent = `Resultado de la búsqueda: Nombre: ${amigo.nombre}, Edad: ${amigo.edad}`;
}

//* FUNCIONES DELETE

function borrarAmigoPorId() {
  const id = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: function () {
      $("#success").text("Amigo eliminado");
    },
  });
}

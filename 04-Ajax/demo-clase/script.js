// Quiero hacer a jsonplaceholder una peticion de tipo GET
// voy a recibir informacion de usuarios dentro de un array
// Quiero mostrar esta informacion en la pagina web

const URL_BASE = "https://jsonplaceholder.typicode.com";
const listaUsuarios = document.querySelector("#listaUsuarios");

const createListItem = (user) => {
  const li = document.createElement("li");
  li.innerHTML = `${user.name} - ${user.email}`;
  listaUsuarios.appendChild(li);
};

const showUsers = (users) => {
  users.forEach(createListItem);
};

$.get(`${URL_BASE}/users`, showUsers);

// yo quiero hacer una peticion...
// necesito peele a una web api que la haga por mi
// quien es esta web api? AJAX ==> $

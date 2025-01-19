//mandaremos un mensaje por el DOM
const divMain = document.querySelector("#div-main");
const titulo = document.createElement("p");
titulo.innerHTML = "Titulo desde el DOM";
divMain.appendChild(titulo);

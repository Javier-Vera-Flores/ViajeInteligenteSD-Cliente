//mandaremos un mensaje por el DOM
const divMain = document.querySelector("#div-main");
divMain.innerHTML = "Hola desde el DOM";
divMain.set;
const titulo = document.createElement("p");

const ObtenerHoraCDMX = () => {
  let fecha = new Date();
  const hora = fecha.getHours().toString().padStart(2, "0");
  const minutos = fecha.getMinutes().toString().padStart(2, "0");
  const segundos = fecha.getSeconds().toString().padStart(2, "0");
  console.log(`La hora actual en CDMX es: ${hora}: ${minutos}:${segundos}`);
  titulo.innerHTML = `La hora actual en CDMX es: ${hora}: ${minutos}:${segundos}`;
};
divMain.appendChild(titulo);
setInterval(ObtenerHoraCDMX, 1000);

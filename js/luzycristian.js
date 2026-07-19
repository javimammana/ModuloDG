
// Fecha del casamiento
const fechaBoda = new Date("2027-04-03T18:00:00");
 
function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaBoda - ahora;
 
  if (diferencia <= 0) {
    document.getElementById("dias").textContent = "00";
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";
    return;
  }
 
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);
 
  document.getElementById("dias").textContent = String(dias).padStart(2, "0");
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}
 
actualizarContador();
setInterval(actualizarContador, 1000);
 
// Portada: al terminar el video, se desvanece hacia el color claro de
// fondo y, con un pequeño intervalo, la foto fija aparece con un fundido.
const DURACION_FUNDIDO = 900; // ms, debe coincidir con el CSS (transition)
const PAUSA_EN_COLOR_CLARO = 10; // ms que se ve solo el color de fondo
 
document.querySelectorAll(".video-portada").forEach((video) => {
  const wrapper = video.closest(".media-portada");
  const imagen = wrapper ? wrapper.querySelector(".imagen-portada") : null;
 
  const pasarAFoto = () => {
    if (!imagen) return;
 
    // 1. El video se desvanece, dejando ver el color claro de fondo
    video.classList.add("oculto");
 
    // 2. Tras el fundido del video + una pequeña pausa en el color claro,
    //    la foto aparece con su propio fundido
    setTimeout(() => {
      imagen.classList.add("visible");
    }, DURACION_FUNDIDO + PAUSA_EN_COLOR_CLARO);
 
    // 3. Una vez que el video ya es invisible, lo sacamos del flujo
    //    para que no interfiera con clics ni siga sonando/cargando
    setTimeout(() => {
      video.style.visibility = "hidden";
      video.pause();
    }, DURACION_FUNDIDO);
  };
 
  video.addEventListener("ended", pasarAFoto);
 
  // Fallback: si el video no puede reproducirse (ej. autoplay bloqueado
  // por el navegador), pasa directo a la foto sin esperar.
  video.addEventListener("error", () => {
    video.classList.add("oculto");
    if (imagen) imagen.classList.add("visible");
  });
});
 
function copiarCVU() {
  const alias = document.getElementById("cvu").textContent.trim();
  navigator.clipboard.writeText(alias).then(() => {
    alert("Alias copiado: " + alias);
  });
}

// // Fecha del casamiento
// const fechaBoda = new Date("2027-04-03T18:00:00");

// function actualizarContador() {
//   const ahora = new Date();
//   const diferencia = fechaBoda - ahora;

//   if (diferencia <= 0) {
//     document.getElementById("dias").textContent = "00";
//     document.getElementById("horas").textContent = "00";
//     document.getElementById("minutos").textContent = "00";
//     document.getElementById("segundos").textContent = "00";
//     return;
//   }

//   const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
//   const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
//   const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
//   const segundos = Math.floor((diferencia / 1000) % 60);

//   document.getElementById("dias").textContent = String(dias).padStart(2, "0");
//   document.getElementById("horas").textContent = String(horas).padStart(2, "0");
//   document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
//   document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
// }

// actualizarContador();
// setInterval(actualizarContador, 1000);

// // Portada: reproduce el video una vez y al terminar deja una imagen fija
// document.querySelectorAll(".video-portada").forEach((video) => {
//   const wrapper = video.closest(".media-portada");
//   const imagen = wrapper ? wrapper.querySelector(".imagen-portada") : null;
 
//   video.addEventListener("ended", () => {
//     if (imagen) {
//       imagen.style.display = "block";
//       video.style.display = "none";
//     }
//   });
 
//   // Fallback: si el video no puede reproducirse (ej. autoplay bloqueado),
//   // muestra directamente la imagen fija.
//   video.addEventListener("error", () => {
//     if (imagen) {
//       imagen.style.display = "block";
//       video.style.display = "none";
//     }
//   });
// });

// function copiarCVU() {
//   const alias = document.getElementById("cvu").textContent.trim();
//   navigator.clipboard.writeText(alias).then(() => {
//     alert("Alias copiado: " + alias);
//   });
// }

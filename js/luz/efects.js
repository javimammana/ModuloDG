
const canvas = document.getElementById("magicCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// crear partículas suaves
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speedY: Math.random() * 0.5 + 0.2,
    opacity: Math.random()
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {

    // ✨ DIFUMINADO (esto es lo único nuevo)
    ctx.shadowBlur = 12;
    ctx.shadowColor = `rgba(253, 230, 138, ${p.opacity})`;

    ctx.beginPath();
    ctx.fillStyle = `rgba(253, 230, 138, ${p.opacity})`;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.y -= p.speedY;

    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }
  });

  // ⚠️ resetear blur
  ctx.shadowBlur = 0;

  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

//BUTTON

function crearBoton(targetId, texto, onClick) {
  const container = document.getElementById(targetId);
  const template = document.getElementById("magicBtnTemplate");

  const clone = template.content.cloneNode(true);
  const btn = clone.querySelector("button");

  btn.querySelector(".btn-text").textContent = texto;

  if (onClick) {
    btn.addEventListener("click", onClick);
  }

  container.appendChild(clone);
}

const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

function abrirMapa() {

    if (esMovil) {
        let appUrl;

        if (/Android/i.test(navigator.userAgent)) {
            appUrl = `geo:${coordenadas}?q=${coordenadas}`;
        } else {
            appUrl = `comgooglemaps://?q=${coordenadas}`;
        }

        window.location.href = appUrl;

        setTimeout(() => {
            window.open(direccionLink, '_blank');
        }, 1000);
    } else {
        // Escritorio: abrir en nueva pestaña
        window.open(direccionLink, '_blank');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    crearBoton("btnWelcome", "Ver Mis 15 años", () =>{
        setTimeout(() => {
            abrirEvento();
        }, 800); // podés ajustar el tiempo
        });

    crearBoton("verDatos", "Ver Datos", () => {
        setTimeout(() => {
            mostrarDatos()
        }, 700);
    });

    crearBoton("aliasTxt", alias);

            crearBoton("aliasTxtT", aliasTarjetasCvu);
    


    
    crearBoton("btnMapa", "Ver en Google Maps", () =>{
        setTimeout(() => {
            abrirMapa();
        }, 800); // podés ajustar el tiempo
        });

    crearBoton("confirmarAsistencia", "Confirmar asistencia", () => {
        const link = document.createElement("a");
        link.href = formAsistencia;
        link.target = "_blank";

        setTimeout(() => {
            link.click();
        }, 800); // podés ajustar el tiempo
        });

    crearBoton("aliasTarjeta", "Datos de Pago", () => {

        setTimeout(() => {
            mostrarDatosTarjeta();
        }, 700); // podés ajustar el tiempo
        });

    crearBoton("recomendarCancion", "Recomendar canción", () => {
        const link = document.createElement("a");
        link.href = formCanciones;
        link.target = "_blank";

        setTimeout(() => {
            link.click();
        }, 800); // podés ajustar el tiempo
        });

    crearBoton("calendario", "Agendar!", () => {
        const a = document.createElement("a");
        a.href = "../calendar/evento-15años.ics";
        a.download = "Fiesta15Años.ics";
        a.click();
        });

            });

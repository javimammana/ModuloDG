
const msFecha = fecha.getTime();

const parrafoDias = document.querySelector("#dias");
const parrafoHoras = document.querySelector("#horas");
const parrafoMinutos = document.querySelector("#minutos");
const parrafoSegundos = document.querySelector("#segundos");
const spanFecha = document.querySelector("#fecha");
const spanHoraEvento = document.getElementById("horaEvento");
const cuentaAtras = document.querySelector("#cuentaAtras");
const grupoDias = document.querySelector("#grupoDias");
const grupoHoras = document.querySelector("#grupoHoras");
const grupoMinutos = document.querySelector("#grupoMinutos");
const dressCode = document.getElementById('dressCode');
const asistenciaHasta = document.getElementById('asistenciaHasta');



const valorTarjeta = document.getElementById('valorTarjeta');

const spanCumple = document.querySelector("#cumple");

const ttCuentaTxt = document.getElementById('ttCuentaTxt');
ttCuentaTxt.innerHTML = ttCuenta;
const cvuTxt = document.getElementById('cvuTxt');
cvuTxt.innerHTML = cvu;

const welcomePage = document.getElementById('welcomePage');
const eventoPage = document.getElementById('eventoPage');

function abrirEvento () {

    welcomePage.classList.remove("d-block");
    welcomePage.classList.add('d-none');
    eventoPage.classList.remove('d-none');
    eventoPage.classList.add('d-block');
    const audio = document.getElementById("miAudio");
    audio.play();
} 


let intervalo = setInterval(() => {
    const hoy = new Date().getTime();
    const distancia = msFecha - hoy;

    if (distancia < 0) {
        clearInterval (intervalo)
        cuentaAtras.innerHTML = "<p class='grande'>Es la fiesta!!</p>"
    }

    const msPorDia = 1000 * 60 * 60 * 24;
    const msPorHora = 1000 * 60 * 60;
    const msPorMinuto = 1000 * 60;
    const msPorSegundo = 1000;

    const dias = Math.floor(distancia / msPorDia);
    const horas = Math.floor((distancia % msPorDia) / msPorHora);
    const minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    const segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    parrafoDias.innerHTML = dias < 1 ? grupoDias.classList.add("d-none") : dias;
    parrafoHoras.innerHTML = horas < 1 ? dias < 1 ? grupoHoras.classList.add("d-none") : "00" : horas < 10 ? "0" + horas : horas;
    parrafoMinutos.innerHTML = minutos < 1 ? horas < 1 ? grupoMinutos.classList.add("d-none") : "00" : minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos.innerHTML = segundos < 10 ? "0" + segundos : segundos;

}, 1000);

const mapa = document.querySelector("#ubicacion");
mapa.innerHTML = `<iframe class="col-10 rounded-4 my-5" src="${direccionLink}" width="600" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;




function mostrarDatos() {
  const btn = document.getElementById('verDatos');
  const alias = document.getElementById('alias');

  btn.classList.add("d-none");
  alias.classList.remove("d-none");
  alias.classList.add("d-flex");
}

document.getElementById('copyBtn').addEventListener('click', function() {
    const aliasTxtCopy = alias;
    navigator.clipboard.writeText(aliasTxtCopy)
    .then(() => {
        Swal.fire({
        position: "top",
        title: "Alias Copiado!",
        color: "#023859",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        });
    })
    .catch(err => {
        console.log("Error al copiar Alias:", err);
    });
});

function mostrarDatosTarjeta() {
    const datoTarj = document.getElementById('datosTarjeta');
    const btnT = document.getElementById('datosTarjeta');

    btnT.classList.add('d-none');
    datoTarj.classList.remove('d-none');
    datoTarj.classList.add('d-flex');

}
const formAsistencia = "https://forms.gle/XfVKqUnnrnDDh11M8";
    dressCode.innerHTML = "Código de Vestimenta";


const asistenciaFecha = "10/10/2026";

asistenciaHasta.innerHTML = `Confirmar asistencia hasta ${asistenciaFecha}`;

const costo = 85000;

valorTarjeta.innerHTML = `Valor de Tarjeta $${costo}.-`;

document.getElementById('copyBtnT').addEventListener('click', function() {
    const aliasTxtCopy = aliasTarjetasCvu;
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


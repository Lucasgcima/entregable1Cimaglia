const reservas = [
  {
    ciudad: "san carlos de bariloche",
    fecha: "22/11/2021",
    documento: "39129520"
  }
];

function buscarReserva() {
  const ciudadInput = document.getElementById("ciudad").value.trim().toLowerCase();
  const fechaInput = document.getElementById("fecha").value.trim();
  const documentoInput = document.getElementById("documento").value.trim().replace(/\./g, "");

  const resultado = document.getElementById("resultado");

  const reservaEncontrada = reservas.find(reserva =>
    reserva.ciudad === ciudadInput &&
    reserva.fecha === fechaInput &&
    reserva.documento === documentoInput
  );

  if (reservaEncontrada) {
    resultado.textContent = "¡Felicitaciones! La reserva fue hecha correctamente. Lo esperamos.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Lamentablemente no tiene hecha una reserva en este hotel.";
    resultado.style.color = "red";
  }
}

function agregarReserva() {
  const ciudad = document.getElementById("nuevaCiudad").value.trim().toLowerCase();
  const fecha = document.getElementById("nuevaFecha").value.trim();
  const documento = document.getElementById("nuevoDocumento").value.trim().replace(/\./g, "");

  const mensaje = document.getElementById("mensaje-agregado");

  if (ciudad && fecha && documento) {
    reservas.push({ ciudad, fecha, documento });
    mensaje.textContent = "Reserva agregada correctamente.";
    mensaje.style.color = "green";

    // Limpiar los campos
    document.getElementById("nuevaCiudad").value = "";
    document.getElementById("nuevaFecha").value = "";
    document.getElementById("nuevoDocumento").value = "";
  } else {
    mensaje.textContent = "Por favor complete todos los campos.";
    mensaje.style.color = "red";
  }
}


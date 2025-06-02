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

  // Confirmación previa
  const confirmado = confirm("¿Revisó que los datos estén cargados correctamente?");
  if (!confirmado) {
    resultado.textContent = "Búsqueda cancelada por el usuario.";
    resultado.style.color = "orange";
    return;
  }

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

  if (!ciudad || !fecha || !documento) {
    mensaje.textContent = "Por favor complete todos los campos.";
    mensaje.style.color = "red";
    return;
  }

  // Confirmación antes de agregar
  const seguro = confirm("¿Está seguro que desea agregar esta reserva?");
  if (!seguro) {
    mensaje.textContent = "Reserva cancelada por el usuario.";
    mensaje.style.color = "orange";
    return;
  }

  reservas.push({ ciudad, fecha, documento });
  mensaje.textContent = "Reserva agregada correctamente.";
  mensaje.style.color = "green";

  // Limpiar campos
  document.getElementById("nuevaCiudad").value = "";
  document.getElementById("nuevaFecha").value = "";
  document.getElementById("nuevoDocumento").value = "";
}

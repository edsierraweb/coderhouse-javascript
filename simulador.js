const requerimientosWeb = []; //array donde voy a almarcer los requerimientos

function iniciarSimulador() {
  //función para iniciar el simulador
  let continuar = true;
  while (continuar) {
    let opcion = prompt(
      "SIMULADOR DE REQUERIMIENTOS - SOPORTE PÁGINAS WEB\n" +
        "Seleccione una opción:\n" +
        "1. Registrar requerimiento\n" +
        "2. Consultar requerimientos\n" +
        "3. Salir"
    );
    if (opcion === "1") {
      registrarRequerimiento();
    } else if (opcion === "2") {
      consultarRequerimientos();
    } else if (opcion === "3") {
      continuar = false;
      alert("Saliendo del simulador. ¡Hasta luego!");
    } else {
      alert("Opción no válida. Por favor, seleccione 1, 2 o 3.");
    }
  }
}

function registrarRequerimiento() {
  //funcipon para regisrtar los requerimientos
  alert("Has seleccionado registrar un requerimiento.");
  let nombreUsuario = prompt("Ingrese su nombre:");
  let nombreNegocio = prompt("Ingrese el nombre del negocio:");
  let prioridad = prompt(
    "Ingrese la prioridad:\n" +
      "1.Alta\n" +
      "2.Media\n" +
      "3.Baja\n\n" +
      "Escribe el número (1-3):"
  );
  let fechaEntrega = prompt("Ingrese la fecha de entrega (DD/MM/AAAA):");
  let descripcion = prompt("Ingrese una breve descripción del requerimiento:");

  let prioridadTexto = ""; //convertir la prioridad de número a texto
  if (prioridad === "1") {
    prioridadTexto = "Alta";
  } else if (prioridad === "2") {
    prioridadTexto = "Media";
  } else if (prioridad === "3") {
    prioridadTexto = "Baja";
  } else {
    prioridadTexto = "No definida";
  }

  const requerimiento = {
    //se crea el objeto para almacer el requerimiento
    nombre: nombreUsuario,
    negocio: nombreNegocio,
    prioridad: prioridadTexto,
    fechaEntrega: fechaEntrega,
    descripcion: descripcion,
    estado: "Pendiente",
  };

  requerimientosWeb.push(requerimiento); //se agrega el objeto al array
  alert(
    "¡Requerimiento registrado exitosamente!\n" +
      "Nombre: " +
      nombreUsuario +
      "\nNegocio: " +
      nombreNegocio +
      "\nPrioridad: " +
      prioridadTexto +
      "\nFecha de entrega: " +
      fechaEntrega +
      "\nDescripción: " +
      descripcion
  );
}

function consultarRequerimientos() {
  if (requerimientosWeb.length === 0) {
    alert("No hay requerimientos registrados.");
    return;
  }
  let mensaje = "Lista de requerimientos registrados:\n";
  for (let i = 0; i < requerimientosWeb.length; i++) {
    const req = requerimientosWeb[i];
    mensaje +=
      "\nRequerimiento #" +
      (i + 1) +
      "\nNombre: " +
      req.nombre +
      "\nNegocio: " +
      req.negocio +
      "\nPrioridad: " +
      req.prioridad +
      "\nFecha de entrega: " +
      req.fechaEntrega +
      "\nDescripción: " +
      req.descripcion +
      "\nEstado: " +
      req.estado +
      "\n";
  }
  alert(mensaje);
}

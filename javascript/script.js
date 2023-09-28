


  /* formulario pop up */

document.addEventListener("DOMContentLoaded", function () {
  const abrirFormularioBtn = document.getElementById("abrirFormulario");
  const formularioContainer = document.getElementById("formularioContainer");
  const body = document.body; // Obtener la referencia al body

  // Mostrar el formulario pop-up cuando se hace clic en el botón
  abrirFormularioBtn.addEventListener("click", function() {
    formularioContainer.style.display = "flex";
    body.classList.add("no-scroll"); // Agregar la clase para deshabilitar el scroll
  });

  // Ocultar el formulario pop-up cuando se hace clic fuera de él
  formularioContainer.addEventListener("click", function(event) {
    if (event.target === formularioContainer) {
      formularioContainer.style.display = "none";
      body.classList.remove("no-scroll"); // Quitar la clase para habilitar el scroll
    }
  });
});








  /* formulario pop up */

  document.addEventListener("DOMContentLoaded", function () {
    const abrirFormularioBtn = document.getElementById("abrirFormulario");
    const formularioContainer = document.getElementById("formularioContainer");
    const body = document.body;
  
    // Mostrar el formulario pop-up cuando se hace clic en el botón
    abrirFormularioBtn.addEventListener("click", function() {
      formularioContainer.style.display = "flex";
  
      // Agregar la clase para la animación de fade-in
      formularioContainer.classList.add("fadeIn"); // Aquí se agrega la clase
  
      body.classList.add("no-scroll");
    });
  
    // Ocultar el formulario pop-up cuando se hace clic fuera de él
    formularioContainer.addEventListener("click", function(event) {
      if (event.target === formularioContainer) {
        formularioContainer.style.display = "none";
        body.classList.remove("no-scroll");
      }
    });
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const contentElements = document.querySelectorAll(".acordeon-content");

  checkboxes.forEach(function (checkbox, index) {
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        contentElements[index].style.maxHeight = contentElements[index].scrollHeight + "px";
      } else {
        contentElements[index].style.maxHeight = "0";
      }
    });
  });
 

 
  });





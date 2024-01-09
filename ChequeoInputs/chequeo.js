const form = document.getElementById('miFormulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
// ... Obtener referencias a otros inputs del formulario

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    if (validarInputs()) {
      // Si la validación es exitosa, puedes enviar el formulario
      form.submit();
    } else {
      // Si la validación falla, puedes mostrar un mensaje de error o realizar alguna otra acción
      //alert('Por favor completa los campos correctamente.');

       // Mostrar mensajes de error
      mostrarError(inputNombre, 'Por favor ingresa un nombre válido', 'errorNombre');
      mostrarError(inputEmail, 'Por favor ingresa un correo electrónico válido', 'errorEmail');
    // Puedes agregar más llamadas a mostrarError() para otros campos del formulario
    }
  });

  function validarInputs() {
    let valido = true;
  
    // Validar el nombre
    if (inputNombre.value.trim() === '') {
      valido = false;
    
    }
      // Agregar estilos de error o mensaje de error para el input de nombre
      // Ejemplo: inputNombre.style.border = '1px solid red';
    
  
    // Validar el correo electrónico
    if (inputEmail.value.trim() === '' || !validarEmail(inputEmail.value)) {
        valido = false;
      
      // Agregar estilos de error o mensaje de error para el input de correo electrónico
      // Ejemplo: inputEmail.style.border = '1px solid red';
    }
  
    // Puedes agregar más validaciones para otros campos del formulario aquí
  
    return valido;
  }
  
  function validarEmail(email) {
    // Expresión regular para validar un correo electrónico básico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }
  
  /* function validarNumeroEntero(numero) {
    const regexNumeroEntero = /^\d+$/;
    return regexNumeroEntero.test(numero);
  }

  function validarNumeroDecimal(numero) {
    const regexNumeroDecimal = /^\d+(\.\d+)?$/;
    return regexNumeroDecimal.test(numero);
  }

  function validarTelefono(telefono) {
    const regexTelefono = /^\+\d{2}-\d{10}$/;
    return regexTelefono.test(telefono);
  }

  function validarURL(url) {
    const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
    return regexURL.test(url);
  } */

  function mostrarError(input, mensaje, idMensajeError) {
    const mensajeError = document.getElementById(idMensajeError);
    mensajeError.textContent = mensaje;
    input.classList.add('input-error');
    // Aquí puedes agregar estilos CSS para resaltar los campos con errores
  }
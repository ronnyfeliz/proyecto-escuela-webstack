function validarFormulario(event) {
    event.preventDefault(); // Evita el envío mientras validamos

    // Capturar los valores
    let nombreEst = document.getElementById("nombre-estudiante").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let grado = document.getElementById("grado").value;
    let fechaNac = document.getElementById("fecha-nacimiento").value;
    let nombrePadre = document.getElementById("nombre-padre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "";
    mensaje.style.color = "red";

    // VALIDACIONES
    if (nombreEst === "") {
        mensaje.textContent = "Por favor, escriba el nombre completo del estudiante.";
        return false;
    }

    if (edad === "" || edad < 5 || edad > 13) {
        mensaje.textContent = "La edad debe ser entre 5 y 13 años.";
        return false;
    }

    if (grado === "") {
        mensaje.textContent = "Seleccione el grado al que desea inscribir al estudiante.";
        return false;
    }

    if (fechaNac === "") {
        mensaje.textContent = "Debe seleccionar la fecha de nacimiento.";
        return false;
    }

    if (nombrePadre === "") {
        mensaje.textContent = "Por favor, escriba el nombre del padre, madre o tutor.";
        return false;
    }

    // Validar correo electrónico
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        mensaje.textContent = "Ingrese un correo electrónico válido.";
        return false;
    }

    // Validar teléfono (10 dígitos sin guiones)
    const telRegex = /^[0-9]{10}$/;
    if (!telRegex.test(telefono)) {
        mensaje.textContent = "El teléfono debe tener 10 dígitos sin guiones. Ejemplo: 8091234567";
        return false;
    }

    // Validación de contraseña
    if (password.length < 6) {
        mensaje.textContent = "La contraseña debe tener mínimo 6 caracteres.";
        return false;
    }

    if (confirmPassword !== password) {
        mensaje.textContent = "Las contraseñas no coinciden.";
        return false;
    }

    // Si todo está correcto
    mensaje.style.color = "green";
    mensaje.textContent = "Formulario enviado correctamente. ¡Gracias por su inscripción!";

    // Enviar formulario
    setTimeout(() => {
        event.target.submit();
    }, 800);

    return true;
}

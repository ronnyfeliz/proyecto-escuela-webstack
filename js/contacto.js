document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío mientras validamos

        // Obtener valores del formulario
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        // Validación de nombre
        if (nombre === "") {
            alert("Por favor, escribe tu nombre.");
            return;
        }

        // Validación de apellido
        if (apellido === "") {
            alert("Por favor, escribe tu apellido.");
            return;
        }

        // Validación de correo electrónico
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo)) {
            alert("Por favor, escribe un correo electrónico válido.");
            return;
        }

        // Validación de número de teléfono (formato dominicano)
        const telefonoRegex = /^\(?[0-9]{3}\)?[- ]?[0-9]{3}-?[0-9]{4}$/;
        if (!telefonoRegex.test(telefono)) {
            alert("Por favor, escribe un número de teléfono válido. Ejemplo: 809-555-1234");
            return;
        }

        // Validación del mensaje
        if (mensaje.length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            return;
        }

        // Si pasa todas las validaciones
        alert("Formulario enviado correctamente.");
        formulario.submit(); // Ahora sí se envía
    });

});

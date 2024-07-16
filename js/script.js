// Aquí puedes agregar scripts adicionales si es necesario

$(document).ready(function () {
    $('#largeCarousel').carousel({
        interval: 2000
    });

    $('#mediumCarousel').carousel({
        interval: 2000
    });
});



// Contacto

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Envía el formulario usando Fetch API o XMLHttpRequest
    fetch('php/send_mail.php', {
        method: 'POST',
        body: new FormData(document.getElementById('contactForm'))
    })
    .then(response => response.text())
    .then(data => {
        // Muestra el mensaje de éxito si el envío fue exitoso
        alert("Tu mensaje fue enviado con éxito.");
        // Puedes redirigir a otra página aquí si lo deseas
        // window.location.href = 'gracias.html';
    })
    .catch(error => {
        // Maneja errores aquí si ocurriera alguno
        console.error('Error al enviar el formulario:', error);
        alert("Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
    });
});

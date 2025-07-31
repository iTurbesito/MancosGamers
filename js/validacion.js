function validarForm() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;   
    const asunto = document.getElementById("asunto").value;  
    const mensaje = document.getElementById("mensaje").value; 
    let isValid = true;

    if(nombre.trim() === ""){
        showError("empty-nombre", "El nombre no puede estar vacio");
        isValid = false;
    } else {
        ocultarError("empty-nombre");
    }

    if(email.trim() === ""){
        showError("empty-email", "El email no puede estar vacio");
        isValid = false;
    } else {
        ocultarError("empty-email");
    }

    if(asunto.trim() === ""){
        showError("empty-asunto", "El asunto no puede estar vacio");
        isValid = false;
    } else {
        ocultarError("empty-asunto");
    }

    if(mensaje.trim() === ""){
        showError("empty-mensaje", "El mensaje no puede estar vacio");
        isValid = false;
    } else {
        ocultarError("empty-mensaje");
    }

    return isValid; 
}

// Funcion que muestre los mensajes de error
function showError(errorId, mensaje) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = "✖️ " + mensaje;
    errorElement.style.display = "block";
}

// Funcion que oculte los mensajes 
function ocultarError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = "";
    errorElement.style.display = "none";
}

// Utilidad para el boton
const boton = document.getElementById("botonEnviar");
boton.addEventListener("click", function(event) {
    event.preventDefault();
    if(validarForm()){ 
        alert("Formulario enviado correctamente master, muchas gracias por tu mensaje");
        window.location.href = "https://www.youtube.com/shorts/dGaCbQes3V0";
    }
});

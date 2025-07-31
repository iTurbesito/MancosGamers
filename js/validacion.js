// Funcion que valida el formulario 
function validarForm() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;   
    const asunto = document.getElementById("asunto").value;  
    const mensaje = document.getElementById("mensaje").value; 
    let isValid = true;

    if(name.trim() === ""){
        showError(empty-name, "El nombre no puede estar vacio")
        isValid = false;
    }   else {
        ocultarError(empty-name);
    }
    

    if(email.trim() === ""){
        showError(empty-email, "El email no puede estar vacio");
        isValid = false;
    }   else {
            ocultarError(empty-email);
        }
    }
    

    if(asunto.trim() === ""){
        showError(empty-asunto, "El asunto no puede estar vacio");
        isValid = false;
    }   else  {
        ocultarError(empty-asunto);
    }

    if(mensaje.trim() === ""){
        showError(empty-mensaje, "El mensaje no puede estar vacio");
        isValid = false;
    }   else  {
        ocultarError(empty-mensaje);
    }

    return isValid;

// Funcion que muestre los mensajes de error
function showError(errorId, mensaje) {
    const errorElement = document.getElementById(errorId + "-error");
    errorElement.textContent = "✖️ " + mensaje;
    errorElement.style.display = "block";
    
}

// Funcion que oculte los mensajes 

function ocultarError(errorId) {
    const errorElement = document.getElementById(errorId + "-error");
    errorElement.style.display = "none";
}




// Utilidad para el boton
const boton = document.getElementById(botonEnviar)
botonEnviar.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    if(validarForm()){ 
        alert("Formulario enviado correctamente master, muchas gracias por tu mensaje");
        window.location.href = "https://www.youtube.com/shorts/dGaCbQes3V0";
    }
}
);
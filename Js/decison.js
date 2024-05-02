function verificarCasilla() {
    // Obtener la casilla de verificación por su ID
    var casilla = document.getElementById("miCasilla");

    // Verificar si la casilla está marcada
    if (casilla.checked) {
        // Si está marcada, permitir continuar
        var url = "reflexion.html";
        window.location.href = url;
        // Aquí podrías redirigir a la siguiente página o realizar otras acciones
    } else {
        // Si no está marcada, mostrar un mensaje de advertencia
        alert("-----------------------------------------------------");
        // Aquí podrías hacer más cosas, como resaltar la casilla de verificación o mostrar un mensaje en la página
    }
}

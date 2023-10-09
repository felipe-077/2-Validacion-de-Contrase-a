function validarContraseña() {
    const contraseña = document.getElementById("passwordInput").value;
    const longitudRequerida = 8;
    const contieneMayuscula = /[A-Z]/.test(contraseña);
    const contieneNumero = /\d/.test(contraseña);
    const contieneEspacio = /\s/.test(contraseña);

    if (contraseña.length > longitudRequerida) {
        alert("La contraseña debe tener al menos 8 caracteres.");
    } else if (!contieneMayuscula) {
        alert("La contraseña debe contener al menos una letra mayúscula.");
    } else if (!contieneNumero) {
        alert("La contraseña debe contener al menos un número.");
    } else if (contieneEspacio) {
        alert("La contraseña no debe contener espacios en blanco.");
    } else {
        alert("La contraseña es válida.");
    }
}
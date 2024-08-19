const longitud = document.getElementById("longitud");
const buttonContrasena = document.getElementsByClassName("generar_contrasena")[0];
const resultadoContrasena = document.getElementsByClassName("resultado")[0];

const generarContrasena = () => {
    const longitudDeseada = longitud.value;
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const simbolos = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    const todosLosCaracteres = mayusculas + minusculas + simbolos;
    let contraSena = "";

    if(longitudDeseada >= 8) {
        for(let i = 0; i < longitudDeseada; i++) {
            contraSena += todosLosCaracteres.charAt(Math.floor(Math.random() * todosLosCaracteres.length));
        }
        resultadoContrasena.innerHTML = contraSena + "";
    } else {
         resultadoContrasena.innerHTML = "La contraseña debe ser de minimo 8 caracteres";
    }

    return contraSena;
}

buttonContrasena.addEventListener("click", generarContrasena);
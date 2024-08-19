const año = document.getElementById("año");
const buttonConversorGrados = document.getElementById("click_resultado");
const resultadAno = document.getElementsByClassName("resultado")[0];

const leapYears = () => {
    const añoUsuario = año.value;
    const mensajeBisiesto = "Año bisiesto";
    const mensajeNoBisiesto = "Año no bisiesto";
     if(añoUsuario % 4 == 0) {
        if(añoUsuario % 100 == 0) {
            if(añoUsuario % 400 == 0) {
                resultadAno.innerHTML = mensajeBisiesto;
                return true;
            } else {
                resultadAno.innerHTML = mensajeNoBisiesto;
                return false;
            }
        } else {
            resultadAno.innerHTML =  mensajeBisiesto;
            return true;
        }
     } else {
        resultadAno.innerHTML = mensajeNoBisiesto;
        return false;
     }
}

buttonConversorGrados.addEventListener("click", leapYears);
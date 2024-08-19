//TA2

//Contenedor Celsius
const contenidoConvertiraCelsius = document.getElementById("contenido_celsius");
const buttonConvertiraCelsius = document.getElementById("boton_celsius");
const outputCelsius = document.getElementsByClassName("temperatura_celsius")[0];

//Contenedor Fahrenheit

const contenidoConvertiraFahrenheit = document.getElementById("contenido_fahrenheit");
const buttonConvertiraFahrenheit = document.getElementById("boton_fahrenheit");
const outputFahrenheit = document.getElementsByClassName("temperatura_fahrenheit")[0];


const convertiraCelsius = () => {
    const temperatura_fahrenheit = contenidoConvertiraCelsius.value;
    const resultado = ((temperatura_fahrenheit - 32) * 0.555).toFixed(1);
    outputCelsius.innerHTML = resultado;
    return resultado;
}
buttonConvertiraCelsius.addEventListener("click", convertiraCelsius);

const convertiraFahrenheit = () => {
    const temperatura_celsius = contenidoConvertiraFahrenheit.value;
    const resultado = ((temperatura_celsius * 1.8) + 32).toFixed(1);
    outputFahrenheit.innerHTML = resultado;
    return resultado;
}
buttonConvertiraFahrenheit.addEventListener("click", convertiraFahrenheit);

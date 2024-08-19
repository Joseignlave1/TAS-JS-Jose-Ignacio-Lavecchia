const numeros = document.getElementById("numeros");
const button = document.getElementById("boton");
const resultado = document.getElementById("resultado_suma");
const num1 = 8;
const num2 = 12;

const mostrarNumeros = () => {
    numeros.innerHTML = num1 + " " + num2;
}

mostrarNumeros();

const sumaNumeros = () => {
    let suma = 0;
    for(let i = num1; i <= num2; i++) {
        suma += i;
    }
    resultado.innerHTML = suma;

    return suma;
}

button.addEventListener("click", sumaNumeros);
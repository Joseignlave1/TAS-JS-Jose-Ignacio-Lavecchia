const contenidoArray = document.getElementsByClassName("contenido_array")[0];
const buttonSuma = document.getElementById("boton_suma");
const resultadoSuma = document.getElementsByClassName("resultado")[0];
let arraySuma = [5,3,8,6,7];
const mostrarArrayNums = () => {
    let contenido = "";
    for(let i = 0; i < arraySuma.length; i++) {
       contenido += arraySuma[i] + " ";
    }
    contenidoArray.innerHTML = contenido;
}
mostrarArrayNums();

const sumaElementos = () => {
    let contador = 0;
    for(let i = 0; i < arraySuma.length; i++) {
        contador += arraySuma[i];
    }
    resultadoSuma.innerHTML = contador;
}

buttonSuma.addEventListener("click", sumaElementos);

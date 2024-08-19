const texto = document.getElementsByClassName("texto")[0];
const repeticiones = document.getElementsByClassName("texto_repetido")[0];
const button = document.getElementsByClassName("repetir__button")[0];
const output = document.getElementById("output");

const repeatString = () => {
    const valorTexto = texto.textContent;
    const repeticionesValor = parseInt(repeticiones.value, 10);
    output.innerHTML = ''; //Se limpia el contenido previo
    for(let i = 0; i < repeticionesValor; i++) {
        const p = document.createElement("p");
        p.textContent = valorTexto;
        output.appendChild(p);
    }
}

button.addEventListener("click", repeatString);
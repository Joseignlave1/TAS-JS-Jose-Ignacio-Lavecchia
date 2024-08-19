const textoOriginal = document.getElementsByClassName("texto")[0];
const button = document.getElementsByClassName("repetir__button")[0];
let textoDadoVuelta = document.getElementById("textoDadoVuelta");
const reverseString = () => {
    let nuevoTexto = "";
    const valorTexto = textoOriginal.textContent;
    textoDadoVuelta.innerHTML = '';
    for(let i = valorTexto.length - 1; i >= 0; i--) {
         nuevoTexto += valorTexto[i];
    }
        const p = document.createElement("p");
        p.textContent = nuevoTexto;
        textoDadoVuelta.appendChild(p);
        return textoDadoVuelta;
}

button.addEventListener("click", reverseString);
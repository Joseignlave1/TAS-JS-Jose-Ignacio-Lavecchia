const arrayEnteros = document.getElementsByClassName("array_enteros")[0];
const button = document.getElementById("devolver_impares");
const arrayImpares = document.getElementsByClassName("array_impares")[0];
let array = [2,3,6,7,8,9]

const mostrarArray = () => {
    let contenido = "";
    for(let i = 0; i < array.length; i++) {
        contenido += array[i] + " ";
    }
    arrayEnteros.innerHTML = contenido;
}
mostrarArray();

const crearNuevoArrayImpares = (nums) => {
    return nums.filter(num => num % 2 !== 0)
}
const mostrarArrayImpares = () => {
    const arrayImparesNuevo = crearNuevoArrayImpares(array);
    arrayImpares.innerHTML = arrayImparesNuevo.join(" ");
}

button.addEventListener("click", mostrarArrayImpares);
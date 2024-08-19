const button = document.getElementsByClassName("eliminar_button")[0];
const elementoAEliminar = document.getElementById("elementoEliminado");
let array = ["Pepe","Juan","Gonzalo","Robin"];

const mostrarArray = () => {
    let contenido = "";
    for(let i = 0; i < array.length; i++) {
        contenido += '<li>' + array[i] + "</li> ";
    }
    document.getElementById("contenido_array").innerHTML = contenido;
}

mostrarArray();

const eliminarElementoDeArray = () => {
    let contenidoNuevoArray = "";
    const valorElemento = elementoAEliminar.value;

    //Elimino el elemento de array
    array = array.filter(elemento => elemento !== valorElemento);

    //Recorro el array con el elemento eliminado si algun valor del input matchea con algun elemento del array
    //Sino al darle click al boton el array va a tener los mismos elementos que antes
    for(let i = 0; i < array.length; i++) {
        contenidoNuevoArray += '<li>' + array[i] + "</li> ";
    }
    document.getElementById("contenido-array-eliminado").innerHTML = contenidoNuevoArray;
}

button.addEventListener("click", eliminarElementoDeArray);

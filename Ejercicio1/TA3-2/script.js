const arrayOriginal = document.getElementsByClassName("array")[0];
const button = document.getElementById("boton");
const cantDuplicados = document.getElementsByClassName("cantidad_duplicados")[0];
let array = [1,2,2,3,3,4,5,6,6,7,8,9,9]

const mostrarArray = () => {
    let contenido = "";
    for(let i = 0; i < array.length; i++) {
        contenido += array[i] + " ";
    }
    arrayOriginal.innerHTML = contenido;
}

mostrarArray();

const cantidadDuplicados = () => {
  let duplicadosCantidad = 0;
  let vistos = {}; //Utilizamos un objeto para almacenar los elementos que ya vimos, si el elemento ya fue visto entonces es duplicado, sino lo marcamos como visitado

  for(let i = 0; i < array.length; i++) {
    if(vistos[array[i]]) {
        duplicadosCantidad++;
    } else {
        vistos[array[i]] = true;
    }
  }
  cantDuplicados.innerHTML = duplicadosCantidad;
  return duplicadosCantidad;
}

button.addEventListener("click", cantidadDuplicados);

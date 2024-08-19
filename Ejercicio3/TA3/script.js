//Ejercicio1 

//TA1-1
const texto = document.getElementsByClassName("texto")[0];
const repeticiones = document.getElementsByClassName("texto_repetido")[0];
const buttonRepeticiones = document.getElementsByClassName("repetir__button")[0];
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

buttonRepeticiones.addEventListener("click", repeatString);

//TA2-2
const textoOriginal = document.getElementsByClassName("texto")[1];
const buttonTextoDadoVuelta = document.getElementsByClassName("repetir__button")[1];
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

buttonTextoDadoVuelta.addEventListener("click", reverseString);

//TA2-3
const buttonContenidoAEliminar = document.getElementsByClassName("eliminar_button")[0];
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

buttonContenidoAEliminar.addEventListener("click", eliminarElementoDeArray);

//TA2-2 
const arrayOriginal = document.getElementsByClassName("contenido_array")[0];
const buttonTitulosLibros = document.getElementById("obtenerSoloTitulosLibros");
const arraySoloLibros = document.getElementsByClassName("nuevoArray_titulosLibros")[0];
let arrayLibros = [{
    libro1: {
        titulo: 'Jorgito el curioso',
        edicciones: '440',
        opinionCritica: 'Buen libro, pero medio pelo'
    },
    libro2: {
        titulo: 'Blanca nieves',
        edicciones: '20000',
        opinionCritica: 'Podría ser mejor' 
    },
    libro3: {
        titulo: 'Pinocho',
        edicciones: '6000',
        opinionCritica: 'Buen libro'
    },
    libro4: {
        titulo: 'Clean Code',
        edicciones: '2000000006868',
        opinionCritica: 'Muy buen libro para aprender a buenos principios y patrones'
    },
}];

const mostrarArrayTitulos = () => {
    let contenido = '';
    arrayLibros.map(item => {
        for(let key in item) {
            contenido += '<ul>';
            contenido += '<br>'
            contenido += '<br>'
            contenido += key;
            for(let prop in item[key]) {
                contenido += `<li>${prop}: ${item [key][prop]}</li>`;
            }
            contenido += '</ul>'
        }
    });
    arrayOriginal.innerHTML = contenido;
}

mostrarArrayTitulos();

const mostrarArraySoloTitulos = () => {
    let contenidoNuevo = '';
    arrayLibros.map(item => {
        contenidoNuevo += `<ul>
        <li>Titulo libro 1:${item.libro1.titulo}</li>
        <li>Titulo libro 2:${item.libro2.titulo}</li>
        <li>Titulo libro 3:${item.libro3.titulo}</li>
        <li>Titulo libro 4:${item.libro4.titulo}</li>
        </ul>`
    });
    arraySoloLibros.innerHTML = contenidoNuevo;
}
buttonTitulosLibros.addEventListener("click", mostrarArraySoloTitulos);

//TA3-1
const arrayEnteros = document.getElementsByClassName("array_enteros")[0];
const buttonObtenerImpares = document.getElementById("devolver_impares");
const arrayImpares = document.getElementsByClassName("array_impares")[0];
let arrayNumeros = [2,3,6,7,8,9]

const mostrarArrayNumeros = () => {
    let contenido = "";
    for(let i = 0; i < arrayNumeros.length; i++) {
        contenido += arrayNumeros[i] + " ";
    }
    arrayEnteros.innerHTML = contenido;
}
mostrarArrayNumeros();

const crearNuevoArrayImpares = (nums) => {
    return nums.filter(num => num % 2 !== 0)
}
const mostrarArrayImpares = () => {
    const arrayImparesNuevo = crearNuevoArrayImpares(arrayNumeros);
    arrayImpares.innerHTML = arrayImparesNuevo.join(" ");
}

buttonObtenerImpares.addEventListener("click", mostrarArrayImpares);

//TA3-2
const arrayOriginalNumeros = document.getElementsByClassName("array")[0];
const buttonNoDuplicados = document.getElementById("botonDuplicados");
const cantDuplicados = document.getElementsByClassName("cantidad_duplicados")[0];
let arrayNumerosEnteros = [1,2,2,3,3,4,5,6,6,7,8,9,9]

const mostrarArrayEnteros = () => {
    let contenido = "";
    for(let i = 0; i < arrayNumerosEnteros.length; i++) {
        contenido += arrayNumerosEnteros[i] + " ";
    }

    arrayOriginalNumeros.innerHTML = contenido;
}

mostrarArrayEnteros();

const cantidadDuplicados = () => {
  let duplicadosCantidad = 0;
  let vistos = {}; //Utilizamos un objeto para almacenar los elementos que ya vimos, si el elemento ya fue visto entonces es duplicado, sino lo marcamos como visitado

  for(let i = 0; i < arrayNumerosEnteros.length; i++) {
    if(vistos[arrayNumerosEnteros[i]]) {
        duplicadosCantidad++;
    } else {
        vistos[arrayNumerosEnteros[i]] = true;
    }
  }
  cantDuplicados.innerHTML = duplicadosCantidad;
  return duplicadosCantidad;
}

buttonNoDuplicados.addEventListener("click", cantidadDuplicados);

//Ejercicio 2

//TA1
const numeros = document.getElementById("numeros");
const buttonNumeros = document.getElementById("botonNumeros");
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

buttonNumeros.addEventListener("click", sumaNumeros);

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


//TA3
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

//TA4
const contenidoArray = document.getElementsByClassName("contenido_array")[1];
const buttonSuma = document.getElementById("boton_suma");
const resultadoSuma = document.getElementsByClassName("resultado")[1];
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

//Ejercicio3

//TA1
const longitud = document.getElementById("longitud");
const buttonContrasena = document.getElementsByClassName("generar_contrasena")[0];
const resultadoContrasena = document.getElementsByClassName("resultado")[2];

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


//TA2

const datosArray = document.getElementsByClassName("array")[1];
const buttonMasEdad = document.getElementById("botonEdades");
const personaMasVieja = document.getElementsByClassName("persona_mas_vieja")[0];
let arrayPersonas= [{
    Juan: {
        edad: 20
    },
    
    Pedro: {
        edad: 40,
    },

    Maria: {
        edad: 21,
    },

    Pepe: {
        edad: 60,
    },

    Rodolfo: {
        edad: 80,
    }


}];

const mostrarArrayPersonas = () => {
    let contenido = '';
    arrayPersonas.map(item => {
        for(let key in item) {
            contenido += '<ul>';
            contenido += key;
            for(let prop in item[key]) {
                contenido +=  " " + ` ${prop}: ${item [key][prop]}`;
            }
            contenido += '</ul>'
        }
    });
    datosArray.innerHTML = contenido;
}

mostrarArrayPersonas();


const personaMayorEdad = () => {
    let counter = 0;
    let nombre = "";
    arrayPersonas.map(item => {
        for(let key in item) {
            for(let prop in item[key]) {
                if(item[key][prop] > counter) {
                    nombre = key;
                    counter = item[key][prop];
                }
            }
        }
        personaMasVieja.innerHTML = nombre + " " +  counter;
        return counter;
    })
}

buttonMasEdad.addEventListener("click", personaMayorEdad)
const datosArray = document.getElementsByClassName("array")[0];
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
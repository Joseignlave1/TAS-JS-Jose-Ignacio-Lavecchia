const arrayOriginal = document.getElementsByClassName("contenido_array")[0];
const button = document.getElementById("obtenerSoloTitulosLibros");
const arraySoloLibros = document.getElementsByClassName("nuevoArray_titulosLibros")[0];
let array = [{
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

const mostrarArray = () => {
    let contenido = '';
    array.map(item => {
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

mostrarArray();

const mostrarArraySoloTitulos = () => {
    let contenidoNuevo = '';
    array.map(item => {
        contenidoNuevo += `<ul>
        <li>Titulo libro 1:${item.libro1.titulo}</li>
        <li>Titulo libro 2:${item.libro2.titulo}</li>
        <li>Titulo libro 3:${item.libro3.titulo}</li>
        <li>Titulo libro 4:${item.libro4.titulo}</li>
        </ul>`
    });
    arraySoloLibros.innerHTML = contenidoNuevo;
}
button.addEventListener("click", mostrarArraySoloTitulos);


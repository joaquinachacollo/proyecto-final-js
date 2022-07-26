let busqueda
let opcion
let peliculas = [
    {nombre: "juego del miedo", genero: "(terror)", top: 4},
    {nombre: "alladin", genero: "(infantil)", top: 10},
    {nombre: "mision imposible", genero: "(accion)", top: 6},
    {nombre: "un sueño posible", genero: "(drama)", top: 7},
    {nombre: "gladiador", genero: "(aventura)", top: 5},
    {nombre: "venom", genero: "(ciencia ficcion)", top: 2},
    {nombre: "eternals", genero: "(ciencia ficcion)", top: 8},
    {nombre: "resident evil", genero: "(terror)", top: 9},
    {nombre: "nadie", genero: "(accion)", top: 3},
    {nombre: "star wars", genero: "(ciencia ficcion)", top: 1}
]

///////////////////// MAIN /////////////////////////

do {
    mostrarMenu()
    opcion = parseInt(prompt("ingrese su eleccion")) 
} while (opcion < 1 || opcion > 4);


if (opcion === 1) {
    mostrarTop()
}
else if (opcion === 2) {
    mostrarGenero()
}
else if (opcion === 3) {
    busqueda = prompt("ingrese el nombre de la pelicula que esta buscando: ")
    let resultado = peliculas.find((pelis) => pelis.nombre == busqueda)
    console.log("Nombre: " + resultado.nombre + " Genero: " + resultado.genero + " Top: " + resultado.top)
}
else if (opcion === 4) {
    console.log("adios nos vemos")
}


///////////////// FUNCIONES ////////////////////////

function mostrarGenero() {
    for (let i = 0; i < peliculas.length; i++) {
        console.log("Genero: " + peliculas[i].genero + " Nombre: " + peliculas[i].nombre)
    }
}

function mostrarTop() {
    peliculas.sort((a,b) => a.top - b.top)
    for (let i = 0; i < peliculas.length; i++) {
        console.log("Top: " + peliculas[i].top + " Nombre: " + peliculas[i].nombre)
    }
}


function mostrarMenu() {
    console.log("-------------------------------------------------------")
    console.log("-------------------------------------------------------")
    console.log("-------------------------------------------------------")
    console.log("presione (1) si quiere ver el top de las peliculas")
    console.log("presione (2) si quiere ver los generos de peliculas")
    console.log("presione (3) si quiere ingresar el nombre de la pelicula")
    console.log("presione (4) para salir")
    console.log("-------------------------------------------------------")
    console.log("-------------------------------------------------------")
}



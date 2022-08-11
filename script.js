let d = document
let resultado
let busqueda = d.getElementById("busqueda")
let menu = d.getElementById("menu")
let containerCatalogo = d.getElementById("peliculas")
let peliculas = [
    {id: 1,nombre: "juego del miedo", genero: "terror", top: 4},
    {id: 2,nombre: "alladin", genero: "infantil", top: 10},
    {id: 3,nombre: "mision imposible", genero: "accion", top: 6},
    {id: 4,nombre: "un sueño posible", genero: "drama", top: 7},
    {id: 5,nombre: "gladiador", genero: "aventura", top: 5},
    {id: 6,nombre: "venom", genero: "ciencia ficcion", top: 2},
    {id: 7,nombre: "eternals", genero: "ciencia ficcion", top: 8},
    {id: 8,nombre: "resident evil", genero: "terror", top: 9},
    {id: 9,nombre: "nadie", genero: "accion", top: 3},
    {id: 10,nombre: "star wars", genero: "ciencia ficcion", top: 1}
]

//////////////////////// MAIN ////////////////////////////

let peliculasJSON = JSON.stringify(peliculas)
localStorage.setItem("peliculas", peliculasJSON)

peliculas = JSON.parse(peliculasJSON)

let catologo = d.getElementById("catalogo")
catologo.addEventListener("click",mostrarCatalogo)




let bus = d.createElement("div")
bus.innerHTML = `
<input type= text id= "buscar" input>
`
busqueda.append(bus)

let buscar = d.getElementById("buscar")
buscar.addEventListener("change", busquedaP)


//////////////////////// FUNCIONES ////////////////////////////

function busquedaP(e) {
    containerCatalogo.innerHTML = ""
    resultado = peliculas.find(pelicula => pelicula.nombre == e.target.value)
    let resultadoFinal = d.createElement("div")
    resultadoFinal.className = "pelicula"
    resultadoFinal.innerHTML = `
    <p>Nombre: ${resultado.nombre}</p>
    <p>Genero: ${resultado.genero}</p>
    <p>Top: ${resultado.top}</p>
    <br>
    `
    
    containerCatalogo.append(resultadoFinal)
}    

function mostrarCatalogo() {
    containerCatalogo.innerHTML = ""
    peliculas.sort(function(a, b) {
        return a.top - b.top
    })
    for (const peli of peliculas) {
        let listadoPeli = d.createElement("div")
        listadoPeli.className = "pelicula"
        listadoPeli.innerHTML = `
        <p>Nombre: ${peli.nombre}</p>
        <p>Genero: ${peli.genero}</p>
        <p>Top: ${peli.top}</p>
        <br>
        `
        containerCatalogo.append(listadoPeli)
    }
}





let d = document
let resultado
let busqueda = d.getElementById("busqueda")
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

let usuario = parseInt(prompt("ingrese su edad"))
usuario > 18 ? console.log("usted puede ver peliculas categoria R") : console.log("no puede ver peliculas categoria R")

let catologo = d.getElementById("catalogo")
catologo.addEventListener("click",mostrarCatalogo)

let bus = d.createElement("div")
bus.innerHTML = `
<input type= text id= "buscar" placeholder="search">
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
        let listadoPeli = d.createElement("div")
        listadoPeli.className = "container-grid"
        listadoPeli.innerHTML = `
        <div class="caja star-wars"></div>
        <div class="caja venom"></div>
        <div class="caja alladin"></div>
        <div class="caja mision-imposible"></div>
        <div class="caja sueño-posible"></div>
        <div class="caja gladiador"></div>
        <div class="caja eternals"></div>
        <div class="caja nadie"></div>
        <div class="caja resident-evil"></div>
        <div class="caja juego-miedo"></div>
        `
        containerCatalogo.append(listadoPeli)
}





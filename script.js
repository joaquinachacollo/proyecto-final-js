let d = document
let resultado
let busqueda = d.getElementById("busqueda")
let containerCatalogo = d.getElementById("peliculas")
let busqueda_res = d.getElementById("busqueda-res")
let peliculas = [
    {id: 1, nombre: "juego del miedo", genero: "terror", top: 4, imagen:"./imagenes/Juegodelmiedo2saw2.webp"},
    {id: 2, nombre: "alladin", genero: "infantil", top: 10, imagen:"./imagenes/alladin.jpg"},
    {id: 3, nombre: "mision imposible", genero: "accion", top: 6, imagen:"./imagenes/MI.jpg"},
    {id: 4, nombre: "un sueño posible", genero: "drama", top: 7, imagen:"./imagenes/SP.webp"},
    {id: 5, nombre: "gladiador", genero: "aventura", top: 5, imagen:"./imagenes/gladiator-II.jpg"},
    {id: 6, nombre: "venom", genero: "ciencia ficcion", top: 2, imagen:"./imagenes/Venom-824559573-large.jpg"},
    {id: 7, nombre: "eternals", genero: "ciencia ficcion", top: 8, imagen:"./imagenes/eternals.jpg"},
    {id: 8, nombre: "resident evil", genero: "terror", top: 9, imagen:"./imagenes/resint.jpg"},
    {id: 9, nombre: "nadie", genero: "accion", top: 3, imagen:"./imagenes/Nadie-793040499-large.jpg"},
    {id: 10, nombre: "star wars", genero: "ciencia ficcion", top: 1, imagen:"./imagenes/Star-Wars-Episode-III.webp"}
]

//////////////////////// MAIN ////////////////////////////

// verificacion de edad
localStorage.setItem("verificacion",
Swal.fire({
  title: 'usted es mayor de edad?',
  width: 500,
  showDenyButton: true,
  confirmButtonText: 'Si',
  denyButtonText: `No`,
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Puede ver peliculas de catagoria R ', '', 'info')
  } else if (result.isDenied) {
    Swal.fire('No pueder ver peliculas de categoria R', '', 'info')
  }
})
)

let usuario = localStorage.getItem("verificacion")

// ver catalogo
let catologo = d.getElementById("catalogo")
catologo.addEventListener("click",mostrarCatalogo)

// busqueda
let bus = d.createElement("div")
bus.innerHTML = `
<input type= text id= "buscar" placeholder="search">
`
busqueda.append(bus)

let buscar = d.getElementById("buscar")
buscar.addEventListener("change", busquedaP)


//////////////////////// FUNCIONES ////////////////////////////

function busquedaP(e) {
    busqueda_res.innerHTML = ""
    let resultadoFinal = d.createElement("div")
    resultadoFinal.className = "pelicula"
    resultado = peliculas.find(pelicula => pelicula.nombre == e.target.value)
    if (e.target.value === "venom") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/Venom-824559573-large.jpg");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      busqueda_res.append(resultadoFinal)
    }
    else if (e.target.value === "nadie") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/Nadie-793040499-large.jpg");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      busqueda_res.append(resultadoFinal)
    }
    else if (e.target.value === "alladin") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/alladin.jpg");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      busqueda_res.append(resultadoFinal)
    }
    
}    



function mostrarCatalogo() {
        containerCatalogo.innerHTML = ""
        let listadoPeli = d.createElement("div")
        listadoPeli.className = "container-grid"
        for (const pelicula of peliculas) {
        let fondo = d.createElement("div")
        fondo.className = "fondo-pelis"
        fondo.setAttribute("style", `background-image: url(${pelicula.imagen});`)
        listadoPeli.append(fondo)
        fondo.innerHTML = `
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>

        `
        containerCatalogo.append(listadoPeli)
        }
}



    
    
    

    


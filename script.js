let d = document
let resultado
let busqueda = d.getElementById("busqueda")
let containerCatalogo = d.getElementById("peliculas")
let busqueda_res = d.getElementById("busqueda-res")


//////////////////////// MAIN ////////////////////////////

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    peliculas = data
    mostrarCatalogo()
  })





// ver catalogo
/*let catologo = d.getElementById("catalogo")
catologo.addEventListener("click",mostrarCatalogo)
*/

// busqueda
let bus = d.createElement("div")
bus.innerHTML = `
<input type= text id= "buscar" placeholder="search">
`
busqueda.append(bus)

let buscar = d.getElementById("buscar")
buscar.addEventListener("change", busquedaP)


//////////////////////// FUNCIONES ////////////////////////////

// resultado de la busqueda //
function busquedaP(e) {
    containerCatalogo.innerHTML = ""
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
      containerCatalogo.append(resultadoFinal)
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
      containerCatalogo.append(resultadoFinal)
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
      containerCatalogo.append(resultadoFinal)
    }
    else if (e.target.value === "juego del miedo") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/Juegodelmiedo2saw2.webp");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      containerCatalogo.append(resultadoFinal)
    }
    else if (e.target.value === "eternals") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/eternals.jpg");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      containerCatalogo.append(resultadoFinal)
    }
    else if (e.target.value === "star wars") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/Star-Wars-Episode-III.webp");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      containerCatalogo.append(resultadoFinal)
    }
    else if (e.target.value === "mision imposible") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/MI.jpg");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      containerCatalogo.append(resultadoFinal)
    }
    else if (e.target.value === "un sueño posible") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/SP.webp");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      containerCatalogo.append(resultadoFinal)
    }
    else if (e.target.value === "gladiador") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/gladiator-II.jpg");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      containerCatalogo.append(resultadoFinal)
    }
    else if (e.target.value === "resident evil") {
      let search = d.createElement("div")
      search.className = "fondo-pelis"
      search.setAttribute("style", `background-image: url("./imagenes/resint.jpg");`)
      resultadoFinal.append(search)
      search.innerHTML = ` 
        <div class="container-ver">
          <a class="ver" href="./compra/compra.html">comprar</a>
        </div>
      `
      containerCatalogo.append(resultadoFinal)
    }
    
    
}    


// catalogo //
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



// verificacion de edad
/*
let usuario = localStorage.getItem("verificacion")

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
*/
    
    
    

    


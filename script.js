let d = document
let resultado
let busqueda = d.getElementById("busqueda")
let containerCatalogo = d.getElementById("peliculas")
let busqueda_res = d.getElementById("busqueda-res")

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
    resultado = peliculas.find(pelicula => pelicula.nombre == e.target.value)
    let resultadoFinal = d.createElement("div")
    resultadoFinal.className = "pelicula"
    

    busqueda_res.append(resultadoFinal)
}    

function mostrarCatalogo() {
        containerCatalogo.innerHTML = ""
        let listadoPeli = d.createElement("div")
        listadoPeli.className = "container-grid"
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
          data.forEach(peliculas => {
            let fondo = d.createElement("div")
          fondo.className = "fondo-pelis"
          fondo.setAttribute("style", `background-image: url(${peliculas.imagen});`)
          listadoPeli.append(fondo)
          fondo.innerHTML = `
          <div class="container-ver">
            <a class="ver" href="compra.html">comprar</a>
          </div>
          
          `
          containerCatalogo.append(listadoPeli)
          });
        })        
}





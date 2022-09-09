let d = document
let busqueda = d.getElementById("busqueda")
let containerCatalogo = d.getElementById("peliculas")
let peliculas


//////////////////////// MAIN ////////////////////////////

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    peliculas = data
    mostrarCatalogo()
  })

let buscar = d.getElementById("buscar")
buscar.addEventListener("change", mostrarCatalogo)


//////////////////////// FUNCIONES ////////////////////////////
// catalogo //
function mostrarCatalogo() {
  containerCatalogo.innerHTML = ""
  let listadoPeli = d.createElement("div")
  listadoPeli.className = "container-grid"
  peliculasFiltradas = peliculas.filter(pelicula => pelicula.nombre == buscar.value)

  let peliculasAMostrar = peliculasFiltradas.length ? peliculasFiltradas : peliculas

  for (const pelicula of peliculasAMostrar) {
    let fondo = d.createElement("div")
    fondo.className = "fondo-pelis"
    fondo.setAttribute("style", `background-image: url(${pelicula.imagen});`)
    listadoPeli.append(fondo)
    fondo.innerHTML = `
        <div class="container-ver">
          <a href="${pelicula.link}" class="ver">comprar</a>
        </div>
        `
      containerCatalogo.append(listadoPeli)
  }
}





// verificacion de edad

/*Swal.fire({
  title: 'usted es mayor de edad?',
  width: 500,
  showDenyButton: true,
  confirmButtonText: 'Si',
  denyButtonText: `No`,
})
.then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Puede ver peliculas de catagoria R ', '', 'info')
  } else if (result.isDenied) {
    Swal.fire('No pueder ver peliculas de categoria R', '', 'info')
  }
})
*/








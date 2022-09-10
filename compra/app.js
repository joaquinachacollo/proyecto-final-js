const nombre = document.getElementById("name")
const apellido = document.getElementById("aped")
const numero_tarjeta = document.getElementById("nt")
const pais = document.getElementById("pais")
const telefono = document.getElementById("telefono")

const parrafo = document.getElementById("error")

const form = document.getElementById("form")


let error = ""

form.addEventListener("submit", e=>{
    e.preventDefault()
})

let compra = document.getElementById("boton")
compra.addEventListener("click", finalcompra)

function finalcompra() {
    error = ""
    parrafo.innerHTML = ""
    if (nombre.value.length < 6) {
        error += `Nombre (No es valido) <br>`
    }
    if (apellido.value.length < 9) {
        error += `Apellido (No es valido) <br>`
    }
    if (numero_tarjeta.value.length < 8) {
        error += `Numero (No es valido) <br>`
    }
    if (pais.value.length < 6) {
        error += `Pais (No es valido) <br>`
    }
    if (telefono.value.length < 10) {
        error += `Telefono (No es valido) <br>`
    }
    parrafo.innerHTML = error
    
    if (error === "") {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su compra fue un exito',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'complete la informacion',
            showConfirmButton: false,
            timer: 1500
        })
    }  
}

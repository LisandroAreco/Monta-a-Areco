//Clase estructura para servicios de la web
class Servicio {
    constructor(titulo, descripcion, precio, foto, stock, id){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.foto = foto;
        this.stock = stock;
        this.id = id
    }
    mostrarTodo() {
        return (this.titulo + " " + this.descripcion + " " + "$" + this.precio + ". Quedan " + this.stock + " lugares");
    }  
    setId (nuevo_id){
        this.id = nuevo_id
    }
    precios() {
        return (this.precio)
    } 
}

//Array para pushear los servicios
let lista = []
lista.push(new Servicio("Zapatillas", "Te llevamos el calzado mas indicado para tu aventura ",  30000,"../media/zapas.jpg", 7,1))
lista.push(new Servicio("Comida", "Preparamos la comida ideal para tu travesía", 50000, "../media/zapas.jpg", 9, 2))
lista.push(new Servicio("Abrigo", "El mejor abrigo para que disfrutes al máximo",  40000, "../media/zapas.jpg", 5, 3))


//DOM
const divGallery = document.querySelector("#listaCards");
const template = document.getElementById("template-div").content
const fragment = document.createDocumentFragment()

lista.forEach(producto => {
    template.querySelector(".titulo__card").textContent = producto.titulo
    template.querySelector(".descripcion__card").textContent = producto.descripcion
    template.querySelector(".precio__card").textContent =  "$" + producto.precio
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

divGallery.appendChild(fragment)




//storage y JSON

const bienvenida = document.getElementById("bienvenida")

const usuario = prompt("Cual es tu nombre?")
//guardo en localstorage
let usuarioJSON = JSON.stringify(usuario)   
localStorage.setItem("nombre", usuarioJSON)
document.querySelector("#bienvenida").textContent = "Bienvenido " + usuario + "!"

//Uso el localstorage
let nombreStorage = JSON.parse(localStorage.getItem("nombre"))
alert("tu nombre es: " + nombreStorage + "!!")

















//Elije el servicio que quiere
/* let pregunta = parseInt(prompt("¿Qué pack te interesa?" + "\n" +  detalleServicios()))

if (pregunta == 1) {   

    let respuesta = confirm("Seleccionaste el pack: " + lista[0].mostrarTodo() + 
            "\n Confirmanos si es correcto")
    if (respuesta) {
        let preguntaCuotas = prompt("Ingrese el número de cuotas en las que desea abonar" + "\n Podés elegir 1 cuota sin interés, o 6 y 12 con interés")
        alert(cuotas(lista[0].precio , preguntaCuotas))    
    } else {
        alert ("Operacion cancelada")
    }

}else if (pregunta ==2) {

    let respuesta = confirm("Seleccionaste el pack: " + lista[1].mostrarTodo() + 
            "\n Confirmanos si es correcto")
    if (respuesta) {
        let preguntaCuotas = prompt("Ingrese el número de cuotas en las que desea abonar" + "\n Podés elegir 1 cuota sin interés, o 6 y 12 con interés")
        alert(cuotas(lista[1].precio , preguntaCuotas))    
    } else {
        alert ("Operacion cancelada")
    }



} else if  (pregunta == 3) {

    let respuesta = confirm("Seleccionaste el pack: " + lista[2].mostrarTodo() + 
            "\n Confirmanos si es correcto")
    if (respuesta) {
        let preguntaCuotas = prompt("Ingrese el número de cuotas en las que desea abonar" + "\n Podés elegir 1 cuota sin interés, o 6 y 12 con interés")
        alert(cuotas(lista[2].precio , preguntaCuotas))    
    } else {
        alert ("Operacion cancelada")
    }


}else {
    alert("Ingresa un numero válido")
    pregunta = parseInt(prompt("¿Qué pack te interesa?" + "\n" +  detalleServicios()))
} */







//Funcion para mostrar todos los detalles 
/* function detalleServicios () {
    let mensaje = ""
    for(let i =0 ; i < lista.length ; i++) {
        mensaje += [i + 1] + ". " + lista[i].mostrarTodo() + "\n";  
    }
    return mensaje;     
} */

//Funcion para calcular cuotas
/* function cuotas (precio, cuotas) {
    while (cuotas !=1 && cuotas != 6 && cuotas !=12){
    cuotas = prompt("ingrese el número de cuotas que desea: 1, 6 o 12")
    }
    precio = precio/cuotas 

    if (cuotas == 1) {
        let mensaje = "El costo en 1 cuota es de $ " + precio
        return mensaje
    }else if (cuotas == 6) {
        precio = precio * 1.4
        precio = Math.ceil(precio)
        let mensaje = "El costo por cuota en 6 cuotas, es de $ " + precio
        return mensaje

    }else if (cuotas ==12){
        precio = precio * 1.8
        precio = Math.ceil(precio)
        let mensaje = "El costo por cuota en 12 cuotas, es de $ " + precio
        return mensaje
    } 
} */
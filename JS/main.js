//Clase estructura para servicios de la web
class Servicio {
    constructor(ubicacion, disciplina, precio, stock,){
        this.ubicacion = ubicacion;
        this.disciplina = disciplina;
        this.precio = precio;
        this.stock = stock;
        this.id = -1
    }
    mostrarTodo() {
        return (this.ubicacion + " " + this.disciplina + " " + "$" + this.precio + ". Quedan " + this.stock + " lugares");
    }  
    setId (nuevo_id){
        this.id = nuevo_id
    }
    precio() {
        return (this.precio)
    } 
}

//Array para pushear los servicios
let lista = []
lista.push(new Servicio("Bariloche Cerro Catedral", "Trekking", 30000, 7))
lista.push(new Servicio("Bariloche 7 Lagos ", "Trekking", 50000, 9))
lista.push(new Servicio("Mendoza Iracu", "Turismo Aventura", 40000, 5))


//No entiendo por que me devuelve -1 y false respectivamente.
console.log(lista.indexOf('Trekking'))
console.log(lista.includes("Trekking"))

//Elije el servicio que quiere
let pregunta = parseInt(prompt("¿Qué pack te interesa?" + "\n" +  detalleServicios()))

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
}



//Sintaxis para cambiar valores especificos de los Arrays
lista[0].precio = 70000








//Funcion para mostrar todos los detalles 
function detalleServicios () {
    let mensaje = ""
    for(let i =0 ; i < lista.length ; i++) {
        mensaje += [i + 1] + ". " + lista[i].mostrarTodo() + "\n";  
    }
    return mensaje;     
}

//Funcion para calcular cuotas
function cuotas (precio, cuotas) {
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
}
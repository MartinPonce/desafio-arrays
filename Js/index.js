// CARRITO DE COMPRAS APLICANDO ARRAYS

let ingreso;
let costo;
let producto;
let codigoDescuento = 26945619;

class Personas {
    constructor(producto, costo){
        this.producto = producto,
        this.costo = costo
    }
}

var arr = []

for (let i = 0; i < 5; i++) {
    let ingreso = prompt(`Ingresar producto al carrito \n1- Combo Perro \n2- Combo Gato \n3- Combo Mixto`);
    if (ingreso == 1){
        costo = 100;
        producto = "Combo Perro";
        descuento()
    } else if (ingreso == 2){
        costo = 80;
        producto = "Combo Gato";
        descuento()
    } else if (ingreso == 3){
        costo = 150;
        producto = "Combo Mixto";
        descuento()
    } else {
        alert("Opcion incorrecta")
    }
    var objeto1 = new Personas(producto, costo)
    arr.push(objeto1)
    alert(`Su ${objeto1.producto} cuesta ${objeto1.costo}`)
}

for (let i = 0; i < arr.length; i++){
    alert(`OBJETO ${i+1} \nPRODUCTO ${arr[i].producto} \nPRECIO ${arr[i].costo}`)
}

function descuento(){
    let descuento = prompt("Posee algun descuento?")
    if (descuento == 'si' || (descuento) == "SI" || (descuento) == "Si" ){
        let ingresoDescuento = parseInt(prompt("Ingrese codigo"))
        if (ingresoDescuento == codigoDescuento){
            alert("Su codigo ha sido aceptado!")
            costo = costo - 2
        } else {
            alert("codigo invalido")
        }
    } else if (descuento == 'no' || descuento == 'NO' || descuento == 'No'){

    }
    else {
        alert("Opcion incorrecta")
    }
}

let precioTotal = arr.reduce((acc, e) => acc + e.costo, 0)
alert(`El precio final de su compra es de $${precioTotal}`)
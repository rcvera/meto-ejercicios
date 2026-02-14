"use strict"

let cantidad = Number(prompt("Ingrese la catidad del pruducto"));
let precio =  Number(prompt("Ingrese Valor del producto"));

let totalAPagar = cantidad*precio;
 
if (totalAPagar > 20) {
    alert ("El parqueadero es gratis: $" + totalAPagar );
} else {
    alert("El valor del parqueadero es un $1: $" + totalAPagar);
}
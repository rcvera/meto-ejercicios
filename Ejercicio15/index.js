//solicitar al usuario ingrese un numero entero
// generamos la tabla de multiplicar 

"use strict"

let numeroEntero= Number(prompt("Ingresa un numero entero"));
let tabla = 11;
let i = 0;
let resultado;
while(i<tabla){
    resultado=numeroEntero*i;
    alert(numeroEntero+"x"+i+"="+resultado);
    i++
}
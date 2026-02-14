"use strict";
//Crear una funcion que reciba un argumento un numero y devuelva true si es par 
// y false si es impar 

function esPar(a){
    return (a % 2 ===0)
}
let result = esPar(Number(prompt("Ingresa un numero")));
alert("El resultado es: "+ result);

let esPar1 = function(b){
    return (a % 2 ===0);
}
let respuesta = esPar1(Number(prompt("Ingresa un numero")));
alert("El resultado es: "+ respuesta);

let esPar2 = (c)=> (c % 2 ===0);
let respuest = esPar2(Number(prompt("Ingresa un numero")));
alert("El resultado es: "+ respuest);

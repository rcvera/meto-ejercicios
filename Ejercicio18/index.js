//Crear una funcion de recibe dos argumentos numero, multiplique y devuelva el
//resultado

"use strict";

function multiplicacion(a,b){
    let resultado = a*b;
    return resultado;
    
}

let valor1 = Number(prompt("Ingrese un valor"));
let valor2 = Number(prompt("Ingrese un valor"));

let valorResultante = multiplicacion(valor1,valor2);
alert("Su resultado es: " + valorResultante);

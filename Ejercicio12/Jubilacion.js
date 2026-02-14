

"use strict";

let age= Number(prompt("Ingrese su edad"));
let yearsWork= Number(prompt("Ingresa los años que va laborando en la empresa"));

if(age>60 || yearsWork>=30){
    alert("Apto para la jubilacion");
}else{
    alert("No apto a la jubilacion");
}
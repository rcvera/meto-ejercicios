"use strict";

let totalkms = Number(prompt("Ingrese Total de kilometros"));
const precioPorKm = 0.25;
const arranque = 0.50;
let totalAPagar = arranque+(totalkms*precioPorKm);


if (totalAPagar < 1.50) {
    totalAPagar = 1.50;
} 
alert (totalAPagar)


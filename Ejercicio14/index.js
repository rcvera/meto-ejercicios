'use strict';

let azucar = (prompt("¿Desea mas azucar (si / no)?"));
let cucharaditas = 1;

do {
    alert("Cucharaditas: " + cucharaditas);
    cucharaditas++;
    azucar = (prompt("¿Desea mas azucar (si / no)?"));
    
}while(azucar === "si")
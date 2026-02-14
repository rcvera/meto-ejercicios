"use strict";
//Crear una funcion que reciba como parametro el numero de elementos del array permita ingresar al usuario uno
// a uno los elementos. la funcion debe devolver el array resultante.

function inputItems(size){
    let nums=[];
    let i=0;

    while(i<size){
        let num= Number(prompt("Imput element:  "));
        nums.push(num);
        i++
    }
    return nums;
}
let totalItems = Number(prompt("Ingrese la cantidad de elementos del array"));
let result = inputItems(totalItems);
alert(result);


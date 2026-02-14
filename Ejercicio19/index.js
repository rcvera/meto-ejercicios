//Crear en una funcion que muestre en un alert todos los del array enviado como argumento

"use strict";


function showArray(array){
    let i = 0;
    while( i < array.length){
        alert(array[i]);
        i++

    }
}
let nums = [5,9,0,1,8];
showArray(nums);

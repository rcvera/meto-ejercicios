
// Crear una funcion que muestre en un alert todos los elementos unos (1)del siguiente array
"use strict";


function showArray(nums){
    let i = 0;
    while( i < nums.length){
        if(nums[i]===1){
            alert(nums[1]);
            }
        i++

    }
}
let nums = [0,1,0,1,0];
showArray(nums);

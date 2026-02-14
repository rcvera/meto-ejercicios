"use strict";

//Escribir un progama que valide si una persona puede obtener una 
//vacuna consederando suedad. La politica dice que los niños 
//menos de 5 años y los adultos mayores de 65 son los favorecidos.
//solicitar la edad al usuario y mostrar el mensaje de favorecido o no.

let age= Number(prompt( "ingresar su edad"));
if (age<=5||age>=65){
    alert ("Es favorecido");
}else{
    alert("No favorecido")
}
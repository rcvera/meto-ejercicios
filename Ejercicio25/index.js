"use strict";

function desencriptar(numero) {
  let array = numero.split("");
  let numeros = array.map(item => Number(item));
  let sinPrimero = numeros.slice(1);
  let sumados = sinPrimero.map(item => item + 1);
  let resultadoArray = [numeros[0]].concat(sumados);
  let resultado = resultadoArray.join("");

  return resultado;
}

let numero = "0877852635";
let resultado = desencriptar(numero);
alert(resultado);





"use strict";

const wallet = {
    material:"cuero",
    color: "cafe",
    precio: 1.2,
    esNueva: true
}  ;
alert("el color de la billetera es:" + wallet.color);

const vehiculos = [
    {marca:"Toyota",cilindraje:2.0,puertas:4,estadoMatricula:"Al dia",propietario:"Roberto"},
    {marca:"Mazda",cilindraje:1.6,puertas:5,estadoMatricula:"Pendiente",propietario:"Maria"},
    {marca:"Chevrolet",cilindraje:1.4,puertas:5,estadoMatricula:"Al dia",propietario:"Luis"}
];
vehiculos.forEach((item) => {
    alert(item.propietario);
});
// filtrar vehiculos con cilindraje mayor a 1.0
//funcion flecha
const vehiculosPequeños = vehiculos.filter(item => item.cilindraje > 1.0);
alert(vehiculosPequeños)
vehiculosPequeños.forEach((item) => {
    alert(item.propietario);
});
"use strict";

const autos = [
  {
    nombre: "Ferrari SF90",
    descripcion: "Motor híbrido V8, más de 1000 HP de potencia.",
    imagen: "https://e01-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089934470.jpg"
  },
  {
    nombre: "Lamborghini Aventador",
    descripcion: "Diseño agresivo y motor V12 atmosférico.",
    imagen: "https://e01-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539095675614.jpg"
  },
  {
    nombre: "Porsche 911 Turbo S",
    descripcion: "Elegancia, velocidad y precisión alemana.",
    imagen: "https://e01-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089343417.jpg"

}];

// Seleccionar el contenedor
const container = document.getElementById("cards-container");

// Recorrer el array y crear las cards con DOM
autos.forEach(auto => {

  // Card principal
  const card = document.createElement("div");
  card.classList.add("card");

  // Header (imagen)
  const header = document.createElement("div");
  header.classList.add("card-header");
  header.style.backgroundImage = url(auto.imagen);

  // Body
  const body = document.createElement("div");
  body.classList.add("card-body");

  const titulo = document.createElement("h2");
  titulo.textContent = auto.nombre;

  const descripcion = document.createElement("p");
  descripcion.textContent = auto.descripcion;

  // Construcción del DOM
  body.appendChild(titulo);
  body.appendChild(descripcion);
 

  card.appendChild(header);
  card.appendChild(body);

  container.appendChild(card);
});


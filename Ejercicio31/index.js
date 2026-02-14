"use strict";
//Tuvimos el div del documento
const container = document.getElementById("contenedor");

//Creamos 
const nuevoParrafo = document.createElement("h1");
nuevoParrafo.textContent = "Estudiantes" ;

const students = ["Luis","Roberto","Yosef","Marcelo","Jackeline","Selene","Felipe","Adrian"];

const nuevaLista = document.createElement("ol");

students.forEach ( (student) => 
    {
    const item = document.createElement("li");
    item.textContent = student ;
    nuevaLista.appendChild(item);
    }
)

container.appendChild(nuevoParrafo);
container.appendChild(nuevaLista);

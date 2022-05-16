/*Estructuras de Control
Problema: Autos de Carrera
58
• En una prueba, un piloto tiene que completar 4
vueltas
• Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
• El programa debe retornar el tiempo total y el
promedio de vuelta */

let vuelta1: number = Number(prompt(" ingrese tiempo de primer vuelta"));
let vuelta2: number = Number(prompt(" ingrese tiempo de segunda vuelta"));
let vuelta3: number = Number(prompt(" ingrese tiempo de tercer vuelta"));
let vuelta4: number = Number(prompt(" ingrese tiempo de cuarta vuelta"));
let VueltasEnteras: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("cantidad de vueltas: 4");
console.log("tiempo total:", VueltasEnteras, "minutos");
console.log("el promedio de vuelta x minuto es:", VueltasEnteras / 4, "km");

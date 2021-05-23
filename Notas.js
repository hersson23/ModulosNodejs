const interface = require("readline-sync");
const promedio = require("./Export.js");

const Lab1 = interface.question("Ingrese la nota de su Laboratorio 1: ");
const Lab2 = interface.question("Ingrese la nota de su Laboratorio 2: ");
const Parcial = interface.question("Ingrese la nota de su Parcial: ");

console.log("\n");

console.log("Su nota promedio del cómputo es " + promedio(Lab1,Lab2,Parcial));

/** Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 
alert("opcion no valida") si ingresa departamento que no sea alguno de esos 4
Dependiendo de que departamento es el seleccionado  debe mostrar cual es la capital de dicho departamento */

let value = prompt(
  "Ingrese uno de los siguientes departamentos: \n  Cundinamarca\n  Quindio\n  Antioquia\n  Valle"
);

if (value === null || value === "") {
    alert ("*** Opción Inválida ***")
} else {
    value = value.toLowerCase();
    if (value === "cundinamarca") {
        alert("*** Santa Fe de Bogotá ***")
    } else if (value === "quindio" || value === "quindío") {
        alert("*** Armenia ***")
    } else if (value === "antioquia") {
        alert("*** Medellín ***")
    } else if (value === "valle") {
        alert("*** Santiago de Cali ***")
    } else {
        alert("*** Escriba un departamento de la lista anterior ***")
    }
}

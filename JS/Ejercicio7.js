// Pregunta si el dia es entre semana o fin de semana

let day = prompt(" Ingrese un dia: ");

if (day === "" || day === null) {
  alert(" Opcion Inválida...!");
} else {
  day = day.toLowerCase();
  if (
    day === "lunes" ||
    day === "martes" ||
    day === "miercoles" ||
    day === "jueves" ||
    day === "viernes"
  ) {
    alert(day + " es un dia entre semana");
  } else if (day === "sabado" || day === "domingo") {
    alert(day + " es un dia de fin de semana");
  } else {
    alert(day + " no es un dia de la semana ");
  }
}

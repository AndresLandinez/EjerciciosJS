const nameUser = prompt("Ingrese su nombre: ");
const edad = prompt("Ingrese su edad: ");
const pais = prompt("Ingrese pais: ");
const skill = prompt("Indique su mano dominante: (diestro o zurdo)");

if (skill != "zurdo") {
  alert(
    " No cumples con los requisitos \n para la beca, Gracias por participar! Skill"
  );
} else if (edad < "18") {
  alert(
    " No cumples con los requisitos \n para la beca, Gracias por participar! Age"
  );
} else if (pais != "colombia" && pais != "ecuador") {
  alert(
    " No cumples con los requisitos \n para la beca, Gracias por participar! Country"
  );
} else {
  alert(
    " Felicidades " +
      nameUser +
      "\n ¡¡¡ Quedas registrado al cupo de la beca !!!"
  );
}

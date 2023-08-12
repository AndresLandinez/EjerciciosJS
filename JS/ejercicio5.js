let username
let age
let addres
let marital_status
let id_number
let cell_phone
let email
let salary

function registerData() {
    username = prompt("Ingresa tu nombre: ")
    age = prompt("Ingresa tu edad: ")
    addres = prompt("Ingresa tu dirección: ")
    marital_status = prompt("Ingresa tu estado civil: ")
    id_number = prompt("Ingresa tu cédula: ")
    cell_phone = prompt("Ingresa tu numero celular: ")
    email = prompt("Ingresa tu correo electrónico: ")
    salary = prompt("Ingresa tu salario: ")
}

function showData(name) {
    alert
    ("Nombre: " + username + "\n" +
    "Edad: " + age + "\n" +
    "Dirección: " + addres + "\n"+
    "Estado Civil: " + marital_status + "\n" +
    "Cédula de ciudadania: " + id_number + "\n" +
    "Número de ceular: " + cell_phone + "\n" + 
    "Correo electrónico: " + email + "\n" + 
    "Salario: " + salary )
}

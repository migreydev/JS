//Dado el array = [3,7,11,8,1,4]

//1) Mostrar por pantalla el valor de cada elemento multiplicado por vuestra edad. La edad debe pedirla por una alerta.

let edad = Number.parseInt(prompt("Introduce tu edad"));

let array = [3, 7, 11, 8, 1, 4];

for (let elemento of array) {
  let edadMultiplicada = elemento * edad;
  console.log(edadMultiplicada);
}

//2) Modificar el valor de cada elemento del array por el resto de dividir cada elemento entre 2.

let dividir = array.map(function (numero) {
  return numero * (numero % 2);
});

console.log(dividir);

//Dado el string = "Jurado, Alberto, Marcelo, Pablo, Maria"
let nombres = "Jurado, Alberto, Marcelo, Pablo, Maria";

//1) Definir un array en cuya cada posición esté cada nombre del string anterior.

let arrayNombres = nombres.split();
console.log(arrayNombres);

//2) Dado el array anterior, mostrar por pantalla en que posición se encuentra la letra a en cada elemento del array.
for (let i = 0; i < arrayNombres.length; i++) {
  let nombre = arrayNombres[i];
  for (let j = 0; j < nombre.length; j++) {
    if (nombre[j].toLowerCase() === "a") {
      console.log(`Posicion de la letra a en la posicion: ${j}`);
    }
  }
}

//3) Dado el array anterior, cambiar en cada elemento del array anterior la letra a por la e.

for (let i = 0; i < arrayNombres.length; i++) {
  let nombre = arrayNombres[i];
  for (let j = 0; j < nombre.length; j++) {
    if (nombre[j] === "a" || nombre[j] === "A") {
      nombre[j] = nombre[j].replace("a", "e");
    }
  }
}

console.log(arrayNombres);

//4) Crear una función que dado un array devuelva el array al revés (la posición 0 ahora tendrá el valor de la última posición y viceversa). Crearla como función normal y como función flecha.
let arrayOriginal = ["Jurado", "Alberto", "Marcelo", "Pablo", "Maria"];
let nuevoArray = [];

function reves(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    nuevoArray.push(array[i]);
  }
  return nuevoArray;
}

console.log(reves(arrayOriginal));

//Se almacena en una variable donde se le pasa por parametro un array
let funcionFlecha = (array) => {
  //Se crea un nuevo array vacio donde se almacenara el contenido que queremos invertir
  let nuevoArrayFech = [];
  //Recorremos el array desde el ultimo elemento hasta el primnero
  for (let i = array.length - 1; i >= 0; i--) {
    //Y lo vamos vamos almacenando en el array que anteriormente hemos creado
    nuevoArrayFech.push(array[i]);
  }
  return nuevoArrayFech;
};

console.log(funcionFlecha(arrayOriginal));

//5) Dado el array de nombres, poner cada nombre en mayúsculas y al revés

//Crea una funcion donde se le paso por parametro un array
function upperCaseReves(array) {
  //Array vacio
  let arrayUpperCase = [];

  //Recorre el array desde atras hacia delante
  for (let i = array.length - 1; i >= 0; i--) {
    //Agrega cada elemento al array creado anteriormente y por cada elemento se convierte en mayuscula
    arrayUpperCase.push(array[i].toUpperCase());
  }
  //Devuelve el array que almacena el contenido de nombres al contrario.
  return arrayUpperCase;
}

console.log(upperCaseReves(arrayOriginal));

/*
1)Crea un array de números de 100 posiciones, que contendrá los números del 1 al 100. 
Partiendo del array ya creado y completamente relleno, obtener la suma de todos ellos y la media.
*/

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
let arrayPosiciones = [];

for (let i = 0; i <= 100; i++) {
  arrayPosiciones.push(i);
}

let sumaTotal = arrayPosiciones.reduce(
  (acumulado, valorActual) => acumulado + valorActual,
  0
);
console.log("Resultado total:", sumaTotal);

let mediaTotal = sumaTotal / arrayPosiciones.length;

console.log("Media total = ", mediaTotal);

/*
2)Crear un array de enteros donde indicamos por teclado el tamaño del array, 
rellenamos el array con números aleatorios entre 0 y 9,
 y mostramos por pantalla el valor de cada posición y la suma de todos los valores.
*/

let tamano = Number.parseInt(prompt("Introduce el tamaño del array"));
let arrayNumAleat = [];

for (let i = 0; i < tamano; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 10);
  arrayNumAleat.push(numeroAleatorio);
  console.log(arrayNumAleat);
  console.log(`Elemento : ${numeroAleatorio} y posicion: ${i}`);
}

let sumTotal = arrayNumAleat.reduce(
  (acumulado, valorActual) => acumulado + valorActual,
  0
);
console.log(`La suma total es: ${sumTotal}`);

/*
3)Leer por alerta  un numero entero y crear un array de ese tamaño, 
con valores aleatorios entre 1 y 300. A continuación, pedir un número entero entre 0 y 9, 
e imprimir todas las posiciones del array que tengan un número acabado en ese dígito. 
Esos números, además de imprimirlos, almacenarlos en un array de salida con el tamaño adecuado.
*/

let tamanoArray = Number.parseInt(prompt("Introduce el tamaño del array"));
let arrayNum = [];

// Crear el array con valores aleatorios entre 1 y 300
for (let i = 0; i < tamanoArray; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 300) + 1;
  arrayNum.push(numeroAleatorio);
}

// Pedir un número entero entre 0 y 9
let numEntero = Number.parseInt(prompt("Introduce un número entre 0 y 9"));

while (numEntero > 9 || numEntero < 0 || isNaN(numEntero)) {
  numEntero = Number.parseInt(prompt("Debes introducir un número entre 0 y 9"));
}

// Array para almacenar los números que terminan en el dígito proporcionado
let arraySalida = [];

// Recorrer el array y buscar los números que terminan en el dígito dado
for (let i = 0; i < arrayNum.length; i++) {
  let numeroActual = arrayNum[i];

  // Verificar si el número termina en ese dígito
  if (numeroActual % 10 === numEntero) {
    console.log("Número encontrado: ", numeroActual);
    arraySalida.push(numeroActual);
  }
}

console.log("Array completo: ", arrayNum);
console.log("Array de salida: ", arraySalida);

/*
4)Introduce por alerta el número de tu DNI, y vuelve a imprimirlo seguido de la letra. 
Para calcular la letra, cogeremos el resto de dividir nuestro dni entre 23, 
el resultado debe estar entre 0 y 22. Tendrás que crear un array que contenga
*/

let dni = Number.parseInt(prompt("Introduce tu dni"));

while (isNaN(dni) || dni < 0 || dni > 99999999) {
  dni = Number.parseInt(
    prompt("Debes introducir un número de DNI válido (8 dígitos)")
  );
}

const letrasDNI = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

let letraResultado = letrasDNI[dni % 23];

console.log(`El DNI es: ${dni}${letraResultado}`);

//1) Define una función que reciba un número n y devuelva si es primo o no

function esPrimo(n) {
  if (n <= 1) {
    console.log(`${n} no es primo.`);
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(`${n} no es primo.`);
      return false;
    }
  }
  console.log(`${n} es primo.`);
  return true;
}

esPrimo(2);

//2) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si hay algún número primo

let arrayNumero = [5, 1, 7, 8, 2, 4, 6, 3, 9];

let hayPrimos = false;

for (let i = 0; i < arrayNumero.length; i++) {
  let n = arrayNumero[i];
  let esPrimo = true;

  if (n <= 1) {
    esPrimo = false;
  } else {
    for (let j = 2; j < n; j++) {
      if (n % j === 0) {
        esPrimo = false;
        break;
      }
    }
  }

  if (esPrimo) {
    console.log(`${n} es primo`);
    hayPrimos = true;
  }
}

if (!hayPrimos) {
  console.log("No hay números primos");
}

//3) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si todos son números primos
let arrayTotPri = [5, 1, 7, 8, 2, 4, 6, 3, 9];
let todosSonPrimos = true; // Variable para verificar si todos son primos

for (let i = 0; i < arrayTotPri.length; i++) {
  let num = arrayTotPri[i];
  let esPrimo = true;

  if (num <= 1) {
    esPrimo = false;
  } else {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        esPrimo = false;
        break; // No es primo, salir del bucle
      }
    }
  }

  if (!esPrimo) {
    todosSonPrimos = false;
    break; // Salimos del bucle si encontramos un número no primo
  }
}

if (todosSonPrimos) {
  console.log("Todos los números son primos.");
} else {
  console.log("No todos los números son primos.");
}

//4) y 5) Dado el array [5,1,7,8,2,4,6,3,9], comprueba en que posición está el primer número primo y cual es

let arrayPosicion = [5, 1, 7, 8, 2, 4, 6, 3, 9];
let esPrimoNum = true;

for (let i = 0; i < arrayPosicion.length; i++) {
  let comprobacion = arrayPosicion[i];

  if (comprobacion <= 1) {
    esPrimoNum = false;
  } else {
    for (let j = 2; j < comprobacion; j++) {
      if (comprobacion % j === 0) {
        esPrimoNum = false;
        break;
      }
    }
  }

  if (esPrimoNum) {
    console.log(`${comprobacion} es primo y se encuentra en la posicion: ${i}`);
    break;
  }
}

//6) Dado el array [5,1,7,8,2,4,6,3,9], quédate sólo con los números primos

let arrayPrimos = [];

for (let i = 0; i < arrayPosicion.length; i++) {
  let num = arrayPosicion[i];
  let esPrimo = true;

  if (num <= 1) {
    esPrimo = false;
  } else {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        esPrimo = false;
      }
    }
  }

  if (esPrimo) {
    arrayPrimos.push(num);
  }
}

console.log(arrayPrimos);

//7)  Dado el array de números primos, dame el producto de todos los elementos del array

let productos = arrayPosicion.map(function (num) {
  return num * num;
});

console.log(`Los productos de cada elemento del array son: ${productos}`);

//8)  Define una función que reciba un String y devuelva si es palíndromo o no

function esPalindromo(string) {
  let esPalindromo = false;
  let palabraReves = "";

  for (let i = string.length - 1; i >= 0; i--) {
    palabraReves += string[i];
  }

  if (string === palabraReves) {
    esPalindromo = true;
  }

  return esPalindromo;
}

console.log(esPalindromo("hola"));
console.log(esPalindromo("oso"));

//9) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma",
//"sol", "mar", "oso", "salas"], comprueba si hay algún palíndromo

let arrayPalindromo = [
  "ana",
  "mesa",
  "radar",
  "seres",
  "folio",
  "sudoku",
  "amor a roma",
  "sol",
  "mar",
  "oso",
  "salas",
];
let palabrasPalindromo = [];
let palabraReves = "";

for (let i = 0; i < arrayPalindromo.length; i++) {
  let palabras = arrayPalindromo[i];

  for (let j = palabras.length - 1; j >= 0; j--) {
    palabraReves += palabras[j];
  }

  if (palabraReves === palabras) {
    console.log(`${palabras} es palíndromo`);
  }

  palabraReves = "";
}

//10) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"],
//comprueba si todos son palíndromos

palabraReves = "";
let todosPalindromo = true;

for (let i = 0; i < arrayPalindromo.length; i++) {
  let palabras = arrayPalindromo[i];

  for (let j = palabras.length - 1; j >= 0; j--) {
    palabraReves += palabras[j];
  }

  if (palabraReves === palabras) {
    todosPalindromo = true;
  } else {
    todosPalindromo = false;
    console.log("Todos no son palíndromos");
    break;
  }

  palabraReves = "";
}

/*
11) 12) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], 
comprueba en que posición está el primer palíndromo y cual es 
*/

palabraReves = "";

for (let i = 0; i < arrayPalindromo.length; i++) {
  let palabras = arrayPalindromo[i];

  for (let j = palabras.length - 1; j >= 0; j--) {
    palabraReves += palabras[j];
  }

  if (palabras === palabraReves) {
    console.log(
      `El primer palíndromo es ${palabras} y se encuentra en la posicion: ${i}`
    );
    break;
  }
}

//13) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"],
//quédate sólo con los palíndromos

palabrasPalindromo = [];
palabraReves = "";

for (let i = 0; i < arrayPalindromo.length; i++) {
  let palabras = arrayPalindromo[i];

  for (let j = palabras.length - 1; j >= 0; j--) {
    palabraReves += palabras[j];
  }

  if (palabraReves === palabras) {
    palabrasPalindromo.push(palabras);
  }

  palabraReves = "";
}

console.log(palabrasPalindromo);

/*
14)  Dado el array de números palíndromos, dame la concatenación de todos los elementos del array
Otros:
*/

let arrayPalindromosNumero = [121, 232, 454, 78987, 1221];

let cadenaNumero = "";

for (let i = 0; i < arrayPalindromosNumero.length; i++) {
  let numero = arrayPalindromosNumero[i];

  cadenaNumero += numero.toString();
}

console.log(cadenaNumero);

//1) Dado un array de números, verifica si hay algún número negativo

let numeros = [23, -15, 42, 8, -3, 67, 0, -9, 34, 19];

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];
  if (numero < 0) {
    console.log("Hay un numero o numeros negativo/s");
    break;
  }
}

//2) Dado un array de Strings, encuentra el índice del primer String que empiece por la letra 'A'

let arrayStrings = ["Manzana", "Coche", "Montaña", "Avion"];

for (let i = 0; i < arrayStrings.length; i++) {
  let string = arrayStrings[i];

  for (let j = 0; j < string.length; j++) {
    let letra = string[j];

    if (letra === "A") {
      console.log(
        `El índice del primer String es el ${i}, pertenece a la palabra ${string}`
      );
    }
  }
}

//3) Dado un array de números de 3 o más cifras,
// calcula la suma de las últimas cifras de cada número

let arrayNumerosGrandes = [123, 4567, 890, 23456];
let sumaNumTotal = 0;

for (let i = 0; i < arrayNumerosGrandes.length; i++) {
  let numeros = arrayNumerosGrandes[i].toString();

  for (let j = numeros.length - 1; j >= 0; j--) {
    if (j === 0) {
      let number = Number.parseInt(numeros[j]);
      sumaNumTotal += number;
    }
  }
}

console.log(sumaNumTotal);

//4) Dado un array de arrays, filtra el array para que sólo queden los arrays de longitud 5

let arrayDeArrays = [
  [1, 2, 3],
  ["a", "b", "c", "d", "e"],
  [true, false],
];

//5) Dado un array de Strings, encuentra el primer string de longitud 3

let arrayPalabrasLongitud = ["sol", "auto", "gato"];

for (let i = 0; i < arrayPalabrasLongitud.length; i++) {
  let palabra = arrayPalabrasLongitud[i];

  if (palabra.length === 3) {
    console.log(`La primera palabra con una longitud de 3 es ${palabra}`);
    break;
  }
}

//6) Dado un array de números, verifica que todos los números sean de 2 cifras o más

let todosSonDosCifrasOMas = false;

for (let i = 0; i < arrayNumerosGrandes.length; i++) {
  if (arrayNumerosGrandes[i] > 10) {
    todosSonDosCifrasOMas = true;
  } else {
    todosSonDosCifrasOMas = false;
  }
}

if (todosSonDosCifrasOMas) {
  console.log("Todos los número son de 2 cifras o mas");
} else {
  console.log("No todos los números tienen 2 cifras o mas");
}

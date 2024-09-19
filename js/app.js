//Ejercicios JS
//Pide por pop-up la altura y el peso y almacénalo cada uno en una variable

let altura =  Number.parseFloat(prompt("Introduce tu altura"));
let peso =  Number.parseFloat(prompt("Introduce tu peso"));

//Imprime por pantalla la suma de ambas variables
console.log("Altura:", altura);
console.log("Peso:", peso);
console.log(altura+peso);

//Pide por pop-up la edad y almacénala en una variable.
let edad = Number.parseInt(prompt("Introduce tu edad"));

//Define una variable con un operador ternario que sea true si la edad es mayor que 18 o false si es menor.
let mayorEdad = edad > 18 ? true : false;
console.log(mayorEdad);


//Crea un bucle que sume los primeros 5 números pares entre 50 y 70. Haz esto de 3 maneras distintas

//for
let sumaNumero = 0;
let pares = 0;

for (let i = 50; i <= 70; i++) {
    if (i % 2 === 0) {
        sumaNumero += i;
        pares++;
    }
    if (pares === 5) {
        break;
    }
}

console.log(sumaNumero);

//While
let sumaWhile = 0;
let numero = 50;
let paresEncontrados = 0;

while (paresEncontrados < 5) {
    if (numero % 2 === 0) {
        sumaWhile += numero;
        paresEncontrados++;
    }
    numero++;
}

console.log(sumaWhile);

//Do While
let suma = 0;
let numeroDoWhile = 50;
let paresDoWhile = 0;

do {
    if (numeroDoWhile % 2 === 0) {
        suma += numeroDoWhile;
        paresDoWhile++;
    }
    numeroDoWhile++;
} while (paresDoWhile < 5);

console.log(suma);

//Pide por pop-up un nombre y almacénalo en una variable.

let nombre = prompt("Introduce tu nombre");

//Comprueba si el nombre contiene la palabra malsonante "Mierda".

// En caso de contenerla, haz un slice del nombre de manera que el resultado de la subcadena dicha sea dicha palabra malsonante. En caso de no contenerla, muestra por pantalla un mensaje de bienvenida mediante un pop-up.

if (nombre.includes('Mierda')) {
    let posicion = nombre.indexOf('Mierda');
    let palabra = nombre.slice(posicion);
    console.log(palabra);

} else{
    alert("Bienvenido/a");
}

//Crea una cadena con los nombres de los compañeros que estén en tu misma fila, separados por comas.

let cadena = 'Ivan, Miguel Angel, Fernando';

//Almacena en una variable el array resultado de separar la cadena anterior por comas (Usar un método de la clase String).

let array = cadena.split(', ');
console.log(array);

//Itera con un bucle dicho array, imprimiendo por consola cada elemento.
for(let elementos of array){
    console.log(elementos);
}
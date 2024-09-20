//Dado el array = [3,7,11,8,1,4]

//1) Mostrar por pantalla el valor de cada elemento multiplicado por vuestra edad. La edad debe pedirla por una alerta.

let edad = Number.parseInt(prompt("Introduce tu edad"));

let array = [3,7,11,8,1,4];

for(let elemento of array){
    let edadMultiplicada = elemento*edad;
    console.log(edadMultiplicada);
}

//2) Modificar el valor de cada elemento del array por el resto de dividir cada elemento entre 2.

let dividir = array.map(function(numero){
    return numero*(numero%2);
})

console.log(dividir)

//Dado el string = "Jurado, Alberto, Marcelo, Pablo, Maria"
//1) Definir un array en cuya cada posición esté cada nombre del string anterior.

//3) Dado el array anterior, cambiar en cada elemento del array anterior la letra a por la e.

/*
Posicionarnos en el elemento #contenedorCartas y mostrarme por consola los siguientes elementos:
*/

let contenedorCartas = document.querySelector("#contenedorCartas");
console.log(contenedorCartas);

//1) Su primer hijo
let primerHijo = contenedorCartas.children[0];
console.log("Primer hijo:", primerHijo);

//2) Su tercer hijo
let tercerHijo = contenedorCartas.children[2];
console.log("Tercer hijo:", tercerHijo);

//3) El siguiente hermano del tercer hijo
let siguienteHermano = contenedorCartas.nextElementSibling;
console.log("Siguiente hermano del tercer hijo:", siguienteHermano);

//4) Su último hijo
let ultimoHijo = contenedorCartas.lastElementChild;
console.log("Último hijo:", ultimoHijo);

//5) Su padre
let padre = contenedorCartas.parentElement;
console.log("Padre de #contenedorCartas:", padre);

// 6) El padre del padre
let padreDelPadre = padre.parentElement;
console.log("Padre del padre de #contenedorCartas:", padreDelPadre);

//7) Su hermano anterior
let hermanoAnterior = ultimoHijo.previousElementSibling;
console.log("Hermano anterior del último hijo:", hermanoAnterior);

//8) Las clases del último hijo
let clasesUltimoHijo = ultimoHijo.classList;
console.log("Clases del último hijo:", clasesUltimoHijo);

//1) Eliminar el primer elemento hijo desde el padre.
let padre = document.querySelector("#cardContainer");

let primerElementoHijo = padre.children[0];
primerElementoHijo.remove();

//2) Eliminar, desde él mismo, el elemento cuya clase es "cards redClass".
let segundoElementoHijo = padre.children[0];
segundoElementoHijo.remove();

//3) Crear un elemento h1 con vuestro nombre.
let h1 = document.createElement("h1");
h1.textContent = "Miguel Angel";

//4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
let enlace = document.createElement("A");
enlace.textContent = "Vedruna";
enlace.href = "https://vedrunasevilla.org/";

//5) Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".
let button = document.createElement("button");
button.id = "botonJoker";
button.textContent = "boton";

//6) Crear un elemento div cuya clase sea "cards greenClass".
let div = document.createElement("div");
div.className = "cards greenClass";

//7) Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente
div.appendChild(h1);
div.appendChild(enlace);
div.appendChild(button);

//8) Añadir a cardContainer el div del apartado anterior.
padre.appendChild(div);

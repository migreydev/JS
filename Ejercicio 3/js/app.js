//Dado el array: const array = ["Joaquin", 1, ["Hola","Adios"], true]

let array = ["Joaquin", 1, ["Hola", "Adios"], true];

//1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor corresponderá a variable + i siendo i el indice en el que se encuentra el array.
for (let i = 0; i < array.length; i++) {
  let elementosArray = array[i];

    //con stringify convierte el objeto o array a string
  localStorage.setItem(i, JSON.stringify(elementosArray)); //
}

//2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage
for (let i = 0; i < array.length; i++) {
  let valorRecuperado = localStorage.getItem(i);
  //con JSON.parse convierte el valor a su valor original 
  console.log(JSON.parse(valorRecuperado));
}

//3) Crear un div por cada variable e insertar el valor de dicha variable en el div

let divNombre = document.createElement("div");
let divNumero = document.createElement("div");
let divArray = document.createElement("div");
let divBoolean = document.createElement("div");

divNombre.textContent = JSON.parse(localStorage.getItem("0"));
divNumero.textContent = JSON.parse(localStorage.getItem("1"));
divArray.textContent = JSON.parse(localStorage.getItem("2"));
divBoolean.textContent = JSON.parse(localStorage.getItem("3"));

//4) insertar estos divs en el body del html
let body = document.querySelector("body");

body.appendChild(divNombre);
body.appendChild(divNumero);
body.appendChild(divArray);
body.appendChild(divBoolean);

var terminarsT, terminarsI;

function reloj(){
    var tiempo = document.querySelector("#tiempo");
    tiempo.innerHTML = Date();
}

function ejecutarIntervalos(evento){
    //alert(evento.target.id);
    console.log(evento);
    var boton = evento.target.id;
    //Accion dependiendo del Botón seleccionado
    switch(boton){
        case "set-timeout":
        terminarsT = setTimeout("reloj()", 2000); //Solo se ejecuta una sola vez
        break;
        case "clear-timeout":
        clearTimeout(terminarsT);
        break;
        case "set-interval":
        terminarsI = setInterval("reloj()", 1000); //Se ejecuta cada determinado tiempo especificado
        break;
        case "clear-interval":
        clearInterval(terminarsI);
        break;
    }
}

function intervalosTiempo(evento){
    //alert("Entro...")
    //Inicializacion de Id de los botones
    var sT = document.getElementById("set-timeout");
    var cT = document.getElementById("clear-timeout");
    var sI = document.getElementById("set-interval");
    var cI = document.getElementById("clear-interval");

    sT.onclick = ejecutarIntervalos;
    cT.onclick = ejecutarIntervalos;
    sI.onclick = ejecutarIntervalos;
    cI.onclick = ejecutarIntervalos;
}

window.onload = intervalosTiempo;

//Arreglo
var semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
var numeros = [1, 2, 3, 4, 5]
console.log(semana);
console.log(semana.length);

for(s in semana){
    document.write("<p>" + semana[s] + "</p>")
}

//Elimina el ultimo valor del arreglo
semana.pop();
document.write("<hr><p> Metodo Pop() elimina el ultimo elento del array</p>" + semana)

//Agrega un elemnto al final del arreglo
semana.push('Domingo')
document.write("<hr><p> Metodo push() inserta un elemento al array</p>" + semana)

//Elimina el Primer elemento del Array
semana.shift()
document.write("<hr><p> Metodo shift() elimina el primer arreglo del array</p>" + semana)

//Inserta un elemento en la primera posición del array
semana.unshift('Lunes')
document.write("<hr><p> Metodo unshift() inserta un elemento en la primera posición del array</p>" + semana)

//Imprime de manera inversa el array
semana.reverse()
document.write("<hr><p> Metodo reverse() imprimi el array de manera inversa</p>" + semana)

//Concatena dos Array
union = semana.concat(numeros);
document.write("<hr><p> Metodo concat() une dos array</p>" + union)

//Convertir array en cadena
convertirCadena = semana.join('-');
document.write("<hr><p> Metodo join() convierte un array en cadena</p>" + convertirCadena)
console.log(typeof convertirCadena);

//Convertir Cadena en Array
convertirArreglo = convertirCadena.split('-')
document.write("<hr><p> Metodo split() convierte un cadena en un array</p>" + convertirArreglo);

//Funciones Varias
var mjs = "Tutorial Js";
console.log(
    mjs,
    mjs.toUpperCase(), //Imprime en Mayusculas
    mjs.toLowerCase(), //Imprime en Minusculas
    mjs.charAt(5), //Imprime el valor de la posicion especificada
    mjs.indexOf('J'), //Imprime la primera posicion en la que se encuentra el valor especificado
    mjs.lastIndexOf('a'), //Imprime la ultima posicion en la que se encuentra el valor especificado
    mjs.substring('8'), //Imprime el valor apartir del valor especificado
    mjs.substring(0,8) //Imprime una cadena a partir del rango especificado
)

var division = 19 / 3;
console.log(division);
console.log(division.toFixed(2)); //Se definen cuantos decimales se van a mostrar
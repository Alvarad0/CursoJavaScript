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
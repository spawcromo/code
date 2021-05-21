/* MANIPULACION DEL DOM CON VARIABLES */

const play = document.querySelector(".fa-play");
const modal = document.querySelector(".modal");
const closer = document.querySelector(".closer");

/* BOTON DE ACCION AL MODAL */

play.onclick = function (){
    modal.style.transform = "scaleX(1)";
    modal.style.display = "block";
}

/* BOTON DE CIERRE DE MODAL */

closer.onclick = function (){
    modal.style.transform ="scaleX(0)";
    modal.style.display = "none";
}
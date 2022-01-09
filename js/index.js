'use strict'

const valorAnterior = document.querySelector("#valor-anterior"); 
const valorActual = document.querySelector("#valor-actual"); 
const btnNumero = document.querySelectorAll(".numero"); 
const btnOperador = document.querySelectorAll(".operador"); 

const display = new Display(valorActual , valorAnterior);

btnNumero.forEach(element => {
    element.addEventListener("click", () => {
        display.agregarNumero(element.innerHTML);
    })
});
btnOperador.forEach(element => {
    element.addEventListener("click", () => {
        display.operar(element.value);
    })
});

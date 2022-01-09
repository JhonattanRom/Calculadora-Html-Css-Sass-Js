'use strict'
class Display {
    constructor(valorActual, valorAnterior){
        // Valores del display.
        this.displayValorActual = valorActual; 
        this.displayAnterior = valorAnterior;
        // Valores a colocar en el display
        this.valorActual = "";
        this.valorAnterior = ""; 
        // Llamamos a la clase Calculadora y asignamos a this.calculador
        this.calculador = new Calculadora();
        // Iniciamos con el tipo de operacion en undefined
        this.tipoOperacion = undefined;
        // Creamos los signos
        this.signos = {
            sumar: "+",
            restar: "-",
            multiplicar: "*",
            dividir: "/"
        }
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    operar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValores();
    }
    agregarNumero(numero){
        if(numero == "." && this.valorActual.includes(".")) return;
        this.valorActual = this.valorActual + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""}`;
    }
    calcular(){
        this.valorActual = parseFloat(this.valorActual); 
        this.valorAnterior = parseFloat(this.valorAnterior);

        if(isNaN(this.valorActual) || isNaN(this.valorAnterior)) return;
        console.log(this.calculador[this.tipoOperacion](this.valorAnterior , this.valorActual));
        this.valorActual = this.calculador[this.tipoOperacion](this.valorAnterior , this.valorActual);
    }


}
/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

*/


let confirmacion = true;
let sumaNumeros = 0;
let numeroUsuario;
let contador = 0

while(confirmacion){

    confirmacion = confirm(`Presione "cancelar" para salir o "aceptar" para seguir`);

    if (confirmacion == false && contador === 0) {

        document.write("Usted esta saliendo del programa y no hay números que mostrar");
        break;
    } if (confirmacion === false && contador != 0) {
        document.write(`La suma de los números que ingreso: ${sumaNumeros}`);
        break;
    }

    numeroUsuario = parseInt(prompt("Escriba un número"));

    sumaNumeros = sumaNumeros + numeroUsuario

    if(isNaN(numeroUsuario)){
        alert("No es un número lo que ingreso");
    }

    contador++;
}
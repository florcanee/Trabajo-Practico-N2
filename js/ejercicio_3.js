/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/


let cadenaDeTexto = "";
let confirmacion;
let textoUsuario;
let contador = 0

do{

    confirmacion = confirm(`Presione "cancelar" para salir o "aceptar" para seguir`);

    if (confirmacion == false && contador === 0){

    document.write("Usted esta saliendo del programa y no hay cadena de texto que mostrar");
    break;
    }else if(confirmacion === false && contador != 0){
        document.write(`Las cadenas de texto que ingreso: ${cadenaDeTexto}`);
    }break;
    textoUsuario = prompt("Escriba una frase");
    
    cadenaDeTexto = cadenaDeTexto + " - " + textoUsuario
    
    contador++;
}while(confirmacion);
/*

1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.

*/

let edadUsuario = parseInt(prompt("Cual es su edad"));

if(edadUsuario >= 18 && edadUsuario <= 70){
    if(edadUsuario >= 18){
        document.write(`Usted puede sacar su licencia para conducir`);
    } else{
        document.write(`Usted no puede sacar su liencia para conducir`);
    }
} else {
    document.write(`Usted tendria que volver hacer el examen de manejo`);
}

/* Escribir un programa que solicite una nota (número) de 0  a 10. 

Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. 
Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

*/

const notaUsuario = parseInt(prompt("Ingrese la nota del examen"));

switch (notaUsuario){
    case 0:
        document.write(`<h2>Muy deficiente</h2>`);
        break;
    case 1:
        document.write(`<h2>Muy deficiente</h2>`);
        break;
    case 2:
        document.write(`<h2>Muy deficiente</h2>`);
        break;
    case 3:
        document.write(`<h2>Insuficiente</h2>`);
        break;
    case 4:
        document.write(`<h2>Insuficiente</h2>`);
        break;
    case 5:
        document.write(`<h2>Suficiente</h2>`);
        break;
    case 6:
        document.write(`<h2>Suficiente</h2>`);
        break;
    case 7:
        document.write(`<h2>Bien</h2>`);
        break;
    case 8:
        document.write(`<h2>Notable</h2>`);
        break;
    case 9:
        document.write(`<h2>Notable</h2>`);
        break;
    case 10:
        document.write(`<h2>Sobresaliente</h2>`);
        break;
default:
    document.write('Ingreso una opcion invalida');
}
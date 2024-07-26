/* PROMESAS, se indica con /promises 
Proporcionan una forma de manejar la asincronía.*/

const fs = require('node:fs/promises');

console.log('Comienzo de lectura del primer texto.');

fs.readFile('./archivo.txt', 'utf-8') // Empieza a leer y devolverá una promesa
    .then(text1 => {    // Llega la promesa
        console.log('Texto 1:', text1);  // Realiza lo siguiente
    });
// Mientras que no se haya leido el texto pues seguirá el transcurso normal,es decir, ejecutará las proximas instrucciones

console.log('Otras cosas que se deberian de ejecuntar al mismo tiempo que se lee el texto!!!!!!!!');

console.log('Comienzo de lectura del segundo texto.');


fs.readFile('./archivo2.txt', 'utf-8')
    .then(text2 => {
        console.log('Texto 2:', text2);
    });







// Promesas con Promisify

const fs = require('node:fs');

/* Por ejemplo aqui hemos hecho un código sin el promises, para pasar de CallBacks a Promises.
Promisify convierte una función basada en callbacks en una que devuelve una promesa.
Este seria el parseo --> const { promisify } = require('node:util');
*/
const { promisify } = require('node:util');
// Y de esta forma podemos crear la versión de promesas de una que no sea de promesas
const leerArchivoConPromesas = promisify(fs.readFile);

console.log('Comienzo de lectura del primer texto.');
/*Al ser asincrono necesitan un mecanismo que les indique cuando ha acabado la lectura del texto.
Para ello se usan los callBacks,funciones que se ejecutan cuando una tarea a terminado,se indican como tercer argumento en el readFile */

leerArchivoConPromesas('./archivo.txt', 'utf-8')  // Empieza a leer y devolverá una promesa
    .then(text1 =>{ // Llega la promesa
        console.log('Texto 1:',text1);  // Realiza lo siguiente
    });
// Mientras que no se haya leido el texto pues seguirá el transcurso normal,es decir, ejecutará las proximas instrucciones

console.log('Otras cosas que se deberian de ejecuntar al mismo tiempo que se lee el texto!!!!!!!!');
console.log('Comienzo de lectura del segundo texto.');

leerArchivoConPromesas('./archivo2.txt', 'utf-8')
    .then(text2 =>{
        console.log('Texto 2:',text2);
    });

// PROMESA DEL TEXTO 1
// PROMESA DEL TEXTO 2


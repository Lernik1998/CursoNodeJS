// Y funcionará con un archivo .mjs ECMA de esta manera, para hacerlo con CommonJS se muestra en el archivo 7.CommonJSAsyncAwait.js
import { readFile } from "node:fs/promises";

console.log('Lectura del primer archivo');

const lecturaTexto1 = await readFile('./archivo.txt','utf-8');
console.log(lecturaTexto1);

console.log('Lectura del segundo archivo');

const lecturaTexto2 = await readFile('./archivo2.txt','utf-8');
console.log(lecturaTexto2);

/* Async/await es una sintaxis para trabajar con promesas que permite escribir código asíncrono de manera más similar al 
código síncrono. */

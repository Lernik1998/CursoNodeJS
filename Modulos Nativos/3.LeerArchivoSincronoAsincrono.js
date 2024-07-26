/*
SINCRONA:Estas se ejecutan en el orden en que aparecen.
Bloquea el hilo de ejecución hasta que la operación de lectura se complete.

ASINCRONAS:Estas se ejecutan en segundo plano, permitiendo que el flujo principal de ejecución continúe y no bloquea el hilo de ejecución .
Cuando la operación asincrónica termina, se ejecuta su callback o promise. */

// Lectura SINCRONA
const fs = require('node:fs');

console.log('Comienzo de lectura del primer archivo');
/* Esto por defecto si de deja así devolveria un buffer (Memoria con información)
con bytes.Y por eso le indicamos que codificación queremos.(En España uft-8)
                    leerArchivoSincrono == readFileSync */
const lectura = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(lectura)


console.log('Comienzo de lectura del segundo archivo');

const segundaLectura = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log(segundaLectura)



// Lectura ASINCRONA

console.log('Comienzo de lectura del primer texto.');
/*Al ser asincrono necesitan un mecanismo que les indique cuando ha acabado la lectura del texto.
Para ello se usan los callBacks,funciones que se ejecutan cuando una tarea a terminado,se indican como tercer argumento en el readFile */

fs.readFile('./archivo.txt', 'utf-8', (err, texto1) => { // Inicia la lectura del archivo de manera asincrónica. --> CALLBACK 1
    // Lee este archivo, codificalo de esta manera y al terminar de leer que ejecute el siguiente comando
    console.log('Texto 1:',texto1);
});
// Mientras que no se haya leido el texto pues seguirá el transcurso normal,es decir, ejecutará las proximas instrucciones

console.log('Otras cosas que se deberian de ejecuntar al mismo tiempo que se lee el texto!!!!!!!!');

console.log('Comienzo de lectura del segundo texto.');

fs.readFile('./archivo2.txt', 'utf-8',(err,texto2) =>{ // Inicia la lectura del segundo archivo de manera asincrónica. --> CALLBACK 2
    console.log('Texto 2:',texto2);
});



// REALIZA CALLBACK 1 (cuando termina la lectura del primer archivo)

// REALIZA CALLBACK 2 (cuando termina la lectura del segundo archivo)



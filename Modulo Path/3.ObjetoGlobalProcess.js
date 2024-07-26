/* Objeto global que proporciona información y control sobre el proceso 
actual de ejecucción.
Dispone de propiedades y métodos para poder interacturar con el entorno de ejecución NodeJS
además de información sobre el proceso actual.
 */

const { resourceUsage } = require("process");

// Argumentos de entrada por la linea de comandos

console.log(process.argv);

// Controlar el proceso y su salida 0 = Success y 1 = Error

// console.log(process.exit(0));

// Podemos controlar eventos del proceso 

process.on('exit', () => {
    console.log("Se ejecutará a la salida!");
    /* Limpiar recursos o limpiar consola.
    console.clear();
    Además de que se podria controlar ciertos errores. */
});

// CWD == Current Working Directory, nos indica desde que carpeta está ejecutando el proceso
console.log('Estamos ejecutando el proceso desde la carpeta:', process.cwd());

// Variables de entorno,que más adelante se profundizará
console.log(process.env);

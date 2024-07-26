/* Modulo nativo OS (Operating System), para importarlo con CommonJS se puede hacer de esta manera que ya sabemos:

const os = requiere('os');

Desde la versión 16 de NodeJS ya no es recomendable utilizar el nombre del modulo nativo.
Lo recomedable es usar el prefijo node:
*/

const os = require('node:os');
// Si nos ponemos encima del require y le damos Command + . Podremos convertir en módulo ECMA (módulo ECMAScript)
console.log("Información del sistema operativo ");
console.log("------------------------------------");
console.log('Nombre del SO:',os.platform());
console.log('Versión del So:',os.release());
console.log('Arquitectura',os.arch());
console.log("CPU's: ",os.cpus()); // <-- Vamos a poder escalar procesos en NodeJS
console.log('Memoria libre',os.freemem() / 1024 / 1024); // Para obtener los megas
console.log('Memoria total:',os.totalmem() / 1024 / 1024);
console.log('Tiempo de encendido del ordenador:',os.uptime() / 60 / 60);



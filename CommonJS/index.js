
/* globalThis es como una varible global de todo y se puede acceder a ella desde donde estemos 
ubicado.
EN EL NAVEGADOR EL globalThis apunta a window, que también es una variable global
Y en NodeJS globalThis apunta a global, pero lo ideal es que nos refiramos directamente a globalThis
USAR SIEMPRE GLOBALTHIS!!!!!

Todo sale de globalThis
*/
globalThis.console.log("GlobalThis");


// Voy a estar usando el patrón de diseño modulo MOD

// Para importar el modulo , indicamos con el requiere la ruta de la función 

/* const sumarImportado = require('./suma'); así se podria perfectamente, pero la forma "FORZADA" es la siguiente: 

CommonJS Requiere Module 

CommonJS no hace falta la extensión del archivo requerido*/

const { sum } = require('./suma');

console.log(sum(1,2));



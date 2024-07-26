const fs = require('node:fs');

/* Lee el directorio actual('.' == PWD) y además le indicamos el CallBack.
Además en los CallBacks el primer parametro es el error y luego lo que leemos
*/

fs.readdir('.', (err, archivos) => {

    if (err) {
        console.error('Error al leer el directorio:', err);
        return; // Para evitar seguir ejecutando el código
    }

    archivos.forEach(archivo => {
        console.log(archivo);
    })
});

// Para saber si un archivo existe

const existe = fs.existsSync('2.ComandoLS.js');

console.log(existe);


/*Con promises, AsyncAwait para emplear el catch 

const fs = require('node:fs/promises');


fs.readdir('.')
    .then(archivos => {
        archivos.forEach(archivo => {
            console.log(archivo);
        })
    }).catch(err => {

        if (err) {
            console.error('Error al leer el directorio:', err);
            return; // Para evitar seguir ejecutando el código
        }
    });


Y para comprobar de con el AsyncAwait la existencia de un archivo, seria de la siguiente manera:

fs.stat('2.ComandoLS.js');
*/


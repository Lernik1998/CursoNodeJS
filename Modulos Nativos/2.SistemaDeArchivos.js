// FS FileSystem, sistema de archivos

const sisArch = require('node:fs'); // Hay que poner node:

// SINCRONO 

const datosArchivo = sisArch.statSync('./archivo.txt')

console.log(
    datosArchivo.isFile(), // Fichero
    datosArchivo.isDirectory(), // Directorio
    datosArchivo.isSymbolicLink(), // Enlace simbólico
    datosArchivo.size // Tamaño bytes 
)
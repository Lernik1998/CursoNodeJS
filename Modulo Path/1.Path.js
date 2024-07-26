const path = require('node:path');

/*Se podra:
    -Construir nuevas rutas
    -Obtener la extensión de algún archivo
    -Comprobar extesión
    -Crear rutas absolutas 
    -Unir rutas   

Las rutas cambian dependiendo del SO:
    -Unix --> `./contenido/subcarpeta/archivo.txt` ----> Las barras son /
    -Windows --> \
Para aviriguar nuestra separación en las rutas podemos usar el siguiente comando en nuestro dispositivo:
 */
console.log('La separación de la ruta en este dispositivo es el:',path.sep);

//  Se puede unir rutas con path.join
const rutaUnida = path.join('contenido','subcarpeta','archivo.txt');
console.log(rutaUnida);

// Basename indica el nombre del fichero de una ruta completa

const nombreFichero = path.basename(`/CursoNodeJS/Modulo Path/1.Path.js`);
console.log(nombreFichero);

// Nombre del fichero sin la extensión

const nombreFicheroSinExtension = path.basename(`/CursoNodeJS/Modulo Path/1.Path.js`,'.js');
console.log(nombreFicheroSinExtension);

// Para conocer la extensión de un archivo, es el más usado 

const extesion = path.extname(`/CursoNodeJS/Modulo Path/1.OtroPunto.YMasCosas.Path.png.js`);
console.log(extesion);

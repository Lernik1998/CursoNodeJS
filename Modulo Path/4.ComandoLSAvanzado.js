//Con promises, AsyncAwait para emplear el catch 

// const { error } = require('node:console');
const fs = require('node:fs/promises');
const path = require('node:path');
// También importamos la biblioteca picocolors
const pico = require('picocolors');

/* Podemos pasarle la carpeta de la que queremos hacer el LS
                                        NullListCollectionOperator --> ?? Que indica que por defecto sea el '.' */
const carpetaDeseada = process.argv[2] ?? '.';
// Posición 0 = Node
// Posición 1 = Fichero


async function listar(carpetaDeseada) {

    let archivos

    // Asincronia secuencial, porque hasta que no hemos leido todo el directorio no continuamos,digamos que no se podria hacer en paralelo
    try {
        archivos = await fs.readdir(carpetaDeseada);
    } catch (error){
        console.log(pico.red(`No se ha podido leer el directorio ${carpetaDeseada}`));
        console.log('Error:', error);
        process.exit(1);
    }
    //Aquí si que lo estamos haciendo en paralelo
    const archivosPromesas = archivos.map(async archivo => {

        /* Se va a mapear cada uno de los archivos que se leen.
        Y se crear una función asincrona dentro del mapeo,que de cada archivo va a querer recuperar información,
        es decir, un stat*/

        const rutaArchivo = path.join(carpetaDeseada, archivo); // Así obtenemos la ruta del fichero que vamos a listar
        // También vamos a recuperar información de cada uno de estos ficheros
        let estadoArchivo
        try {
            estadoArchivo = await fs.stat(rutaArchivo);
        } catch {
            console.log(`No se pudo leer el archivo ${rutaArchivo}`);
            process.exit(1);
        }

        // Y aqui almacenamos la información recibida
        const directorio = estadoArchivo.isDirectory();
        const tipoArchivo = directorio ? 'Directorio' : 'Fichero'; // Si es un directorio indicará una d sino un guión
        const tamanio = estadoArchivo.size.toString();
        const ultimaModif = estadoArchivo.mtime.toLocaleString();

        // Y devolvemos la información 
                // Con padEnd,limita los espacios del final a 20 y con padStart limita el inico a 10 espacios
        return `Tipo: ${tipoArchivo} Nombre: ${pico.blue(archivo.padEnd(25))} Tamaño: ${pico.yellow(tamanio.padStart(10))} Última modificación: ${pico.bgMagenta(ultimaModif)} `;
    })
    // Aqui esperaremos a todas las promesas.
    const informacionArchivosObtenida = await Promise.all(archivosPromesas);

    informacionArchivosObtenida.forEach(info =>{
        console.log(info);
    })
}

listar(carpetaDeseada);


// Y para comprobar de con el AsyncAwait la existencia de un archivo, seria de la siguiente manera: fs.stat('2.ComandoLS.js');

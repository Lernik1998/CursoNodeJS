const { readFile } = require("node:fs/promises");

// Función autoinvocada, llamada también IIFE -Inmediatly Invoked Function Expression

(       
    async () =>{
        console.log('Lectura del primer archivo');

        const lecturaTexto1 = await readFile('./archivo.txt','utf-8');
        console.log(lecturaTexto1);

        console.log('Lectura del segundo archivo');

        const lecturaTexto2 = await readFile('./archivo2.txt','utf-8');
        console.log(lecturaTexto2);
    }
)()

    /* Este código es lo mismo que arriba pero con una función que luego se llama, no autoinvocada! */
async function func(){
    console.log('Lectura del primer archivo');

    const lecturaTexto1 = await readFile('./archivo.txt','utf-8');
    console.log(lecturaTexto1);

    console.log('Lectura del segundo archivo');

    const lecturaTexto2 = await readFile('./archivo2.txt','utf-8');
    console.log(lecturaTexto2);
}

func();


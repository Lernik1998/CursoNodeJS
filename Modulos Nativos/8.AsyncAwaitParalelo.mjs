import { readFile } from "node:fs/promises";

Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([texto1,texto2]) =>{
    console.log(texto1);
    console.log(texto2);
})

/* 
Ventajas:
    -Más rápido
    -Promise.all permite ejecutar múltiples promesas en paralelo y esperar a que todas se resuelvan,para avisarnos
    -Tenemos el control,porque indicamos el orden de ejecucción
    */
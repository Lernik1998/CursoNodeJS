/* .js --> Por defecto utiliza CommonJS
   .cjs --> Para forzar que use CommonJS
   .mjs --> Para utilizar ES Modules  
   
Con mjs podemos realizar lo siguiente:
*/

import { resta,mensaje } from './Xfunciones.mjs'
/* 
También se distingue porque con ECMAScript si que es necesaria la extensión
Y tampoco tendriamos que importar las cosas una a una.
import { mensaje } from './Xfunciones.mjs' */

console.log(resta(4,1));

console.log(mensaje("LERnik"));






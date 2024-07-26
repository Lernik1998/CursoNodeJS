// Primero obtenemos la dependencia http
const http = require('node:http');

/* Creamos servidor que solamente puede hacer 2 cosas: 
1.Recibir (petición) requests 
2.Devolver una respuesta
*/

// Estoy accediendo a la función del archivo 6.BuscarPuertosValidos.js
const { buscarPuertoDisponible } = require(`./6.BuscarPuertosValidos`);

const servidor = http.createServer((req, res) => {  // CallBack
    console.log('Petición recibida!');
    res.end('Adiós'); // Acaba la respuesta con este mensaje
});


buscarPuertoDisponible(3000).then(puerto => {
    servidor.listen(puerto, () => {
        console.log(`Servidor escuchando en el puerto http://localhost:${puerto}`);
    });
});

/*Ahora hacemos la escucha del servidor, indicamos donde tiene que escuchar el servidor 
Si indicamos que escuche el puerto 0, automaticamente va a detectar el primer puerto disponible.
Para saber el puerto que se ha detectado 

servidor.listen(0, () => { // CallBack
    console.log(`Servidor escuchando en el puerto ${servidor.address().port}`);
});

*/
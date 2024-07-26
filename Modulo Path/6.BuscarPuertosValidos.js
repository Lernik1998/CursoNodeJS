// Conexiones TCP, más ligero que HTTP

const net = require('node:net');

function buscarPuertoDisponible(puertoDeseado) {
    // Se delvuelve una promesa
    return new Promise((resolver,rechazar) =>{
        const servidor = net.createServer();
        servidor.listen(puertoDeseado,()  =>{
            const puerto = servidor.address().port;
            servidor.close(() =>{
                resolver(puerto);
            });
        });
        // En el caso de que de un error, tenemos que escuchar el evento del error del servidor 
        servidor.on('error',(err) =>{
            // Si el código de error es que está en uso el servidor
            if (err.code == 'EADDRINUSE') {
                buscarPuertoDisponible(0).then(puerto => resolver(puerto));
            }else{
                rechazar(err);
            }
        });
    });
}

module.exports ={buscarPuertoDisponible};

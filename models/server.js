const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.domain = process.env.DOMAIN; // Recoge el dominio por el que escucha
        this.port = process.env.PORT; // Recoge el puerto por el que escucha
        this.middleware;
    }

    // Carga el directorio donde se encuentra index.html
    middleware() {
        // Middleware para manejar datos JSON en el cuerpo de la solicitud
        this.app.use(express.json()); // Asegúrate de incluir este middleware
        
        // Middleware para servir archivos estáticos desde la carpeta 'public'
        this.app.use(express.static('public'));
    }

    // Se pone a escuchar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en http://localhost:${this.port}`);
        });
    }
}

module.exports = Server
require("dotenv").config();
const Server = require('./models/server.js');
const {
    savePagePOST,
    loadPageGET,
    deletePageGET
} = require("./controllers/pages-controller.js");

const server = new Server();
server.middleware(); // Carga la carpeta donde está el index.html

// Las rutas que necesitamos
server.app.get('/load-page', loadPageGET);
server.app.post('/save-page', savePagePOST);
server.app.get('/delete-page', deletePageGET);

server.listen();
require("dotenv").config();
const Server = require('./models/server.js');
const PageController = require("./controllers/page-controller.js");

const server = new Server();
server.middleware(); // Carga la carpeta donde está el index.html

// Las rutas que necesitamos
server.app.get('/load-page', PageController.loadPageGET);
server.app.post('/save-page', PageController.savePagePOST);
server.app.get('/delete-page', PageController.deletePageGET);
server.app.post('/add-component', PageController.addComponentPOST);
server.app.get('/get-component', PageController.loadBlockGET);

server.listen();
const express = require('express');
const fs = require('node:fs');
const path = require('node:path'); // Asegúrate de importar el módulo 'path' para manejar rutas
const app = express();
const port = 9080;

// Middleware para manejar datos JSON en el cuerpo de la solicitud
app.use(express.json()); // Asegúrate de incluir este middleware

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta para guardar la página en un archivo JSON
app.post('/save-page', (req, res) => {
    try {
        // Suponiendo que los datos son enviados directamente en el cuerpo de la solicitud (sin la propiedad 'data')
        const data = req.body.data; // Aquí usamos req.body directamente si no se está envolviendo en 'data'

        console.log(data);

        if (!data) {
            return res.status(400).json({ message: 'No se recibieron datos del proyecto' });
        }

        // Ruta para guardar el archivo JSON dentro de 'pages'
        const filePath = path.join(__dirname, 'pages', 'page.json');

        // Crear el directorio si no existe
        const dirPath = path.dirname(filePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Guardar el archivo JSON
        fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err);  // Mostrar el error en la consola
                return res.status(500).json({ message: 'Error al guardar la página', error: err });
            }
            res.json({ message: 'Página guardada exitosamente' });
        });
    } catch (err) {
        console.error('Error en el servidor:', err);  // Mostrar cualquier error no manejado
        res.status(500).json({ message: 'Error interno del servidor', error: err });
    }
});

// Ruta para cargar los datos de la página al iniciar
app.get('/load-page', (req, res) => {
    const filePath = path.join(__dirname, 'pages', 'page.json');

    // Verificar si el archivo existe
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return res.status(500).json({ message: 'Error al leer el archivo', error: err });
            }

            // Enviar los datos leídos al cliente
            try {
                const parsedData = JSON.parse(data); // Parsear el archivo JSON
                res.json(parsedData);
            } catch (err) {
                console.error('Error al parsear el JSON:', err);
                res.status(500).json({ message: 'Error al procesar los datos JSON', error: err });
            }
        });
    } else {
        res.status(404).json({ message: 'No se encontró ninguna página cargada' });
    }
});


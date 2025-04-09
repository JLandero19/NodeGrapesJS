const { response } = require('express');
const fs = require('node:fs');
const path = require('node:path'); // Asegúrate de importar el módulo 'path' para manejar rutas

// Función que guarda la página
const savePagePOST = (req, res = response) => {
    try {
        // Suponiendo que los datos son enviados directamente en el cuerpo de la solicitud (sin la propiedad 'data')
        const data = req.body; // Aquí usamos req.body

        console.log(data);

        if (!data) {
            return res.status(400).json({ message: 'No se recibieron datos del proyecto' });
        }

        // Ruta para guardar el archivo JSON dentro de 'pages'
        const filePath = path.join(__dirname, '../pages', 'page.json');

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
}

const deletePageGET =  (req, res = response) => {
    const filePath = path.join(__dirname, '../pages', 'page.json');
    console.log(filePath);
    // Verificar si el archivo existe
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
            } else {
                console.log('Archivo eliminado con éxito');
            }
        });
    }
}

// Función que carga la página
const loadPageGET =  (req, res = response) => {
    const filePath = path.join(__dirname, '../pages', 'page.json');

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
}

const addComponentPOST = (req, res = response) => {
    const nuevoComponente = req.body;
    const clave = nuevoComponente.label.toLowerCase();
    const archivo = "example";//cambia esto por "nuevoComponente.category.toLowerCase();" y ya cada uno se guardara en su categoria correspondiente

    const filePath = path.join(__dirname, "../public/js/block", `blocks-${archivo}.json`);

    // Leer el archivo JSON existente
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return res.status(500).json({ error: "Error al leer el archivo JSON." });
        }

        let componentes = {};

        try {
            componentes = JSON.parse(data);
        } catch (parseError) {
            console.error("Error al parsear JSON:", parseError);
        }

        // Agregar o reemplazar el componente
        componentes[clave] = nuevoComponente;

        // Escribir el nuevo JSON al archivo
        fs.writeFile(filePath, JSON.stringify(componentes, null, 2), (err) => {
            if (err) {
                console.error("Error al guardar el archivo:", err);
                return res.status(500).json({ error: "Error al guardar el archivo JSON." });
            }
            res.json({ mensaje: "Componente guardado correctamente." });
        });
    });
};

module.exports = {
    loadPageGET,
    deletePageGET,
    savePagePOST,
    addComponentPOST
}
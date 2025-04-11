const { response } = require('express');
const fs = require('node:fs');
const path = require('node:path'); // Asegúrate de importar el módulo 'path' para manejar rutas

class PageController {
        // Función que guarda la página
        static savePagePOST = (req, res = response) => {
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
    
        static deletePageGET = (req, res = response) => {
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
        static loadPageGET = (req, res = response) => {
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

        // Función que carga los bloques
        static loadBlockGET = (req, res = response) => {
            const directoryPath = path.join(__dirname, '../public/js/block');
        
            fs.readdir(directoryPath, (err, files) => {
                if (err) {
                    return res.status(500).json({ error: 'Error leyendo el directorio' });
                }
            
                const jsonFiles = files.filter(file => path.extname(file) === '.json');
            
                const results = [];
                let processed = 0;
            
                jsonFiles.forEach(file => {
                    const filePath = path.join(directoryPath, file);
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        processed++;
                
                        if (!err) {
                            try {
                                const jsonContent = JSON.parse(data);
                                results.push({ filename: file, category: jsonContent.category, content: jsonContent.data });
                            } catch (parseError) {
                                console.error(`Error parseando ${file}:`, parseError);
                            }
                        }
                
                        // Cuando se han procesado todos los archivos, responder
                        if (processed === jsonFiles.length) {
                            return res.json(results);
                        }
                    });
                });

                console.log(results); // Muestra los datos
            
                // Por si no hay archivos
                if (jsonFiles.length === 0) {
                    return res.json([]);
                }
            });
        }
    
        // Función para agregar componente al archivo JSON
        static addComponentToFile(category, filename, key, newComponent, filePath, res) {
            fs.readFile(filePath, "utf8", (err, data) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        // Si el archivo no existe, lo creamos con la categoría y el componente
                        const componentes = {
                            category: category,
                            filename: filename,
                            data: {
                                [key]: newComponent
                            }
                        };

                        // Escribimos el nuevo archivo
                        fs.writeFile(filePath, JSON.stringify(componentes, null, 4), (err) => {
                            if (err) {
                                console.error("Error al guardar el archivo:", err);
                                return res.status(500).json({ error: "Error al guardar el archivo JSON." });
                            }

                            res.json({ message: "Componente guardado correctamente en un nuevo archivo." });
                        });
                    } else {
                        // Si ocurre otro error al leer el archivo
                        console.error("Error al leer el archivo:", err);
                        return res.status(500).json({ error: "Error al leer el archivo JSON." });
                    }
                } else {
                    let componentes = {};

                    try {
                        componentes = JSON.parse(data);
                    } catch (parseError) {
                        console.error("Error al parsear JSON:", parseError);
                        return res.status(500).json({ error: "Archivo JSON corrupto." });
                    }

                    // Si el archivo existe, solo actualizamos la clave 'data'
                    if (!componentes.data) {
                        componentes.data = {};
                    }

                    // Agregar o reemplazar el componente
                    componentes.data[key] = newComponent;

                    // Guardar el archivo actualizado
                    fs.writeFile(filePath, JSON.stringify(componentes, null, 4), (err) => {
                        if (err) {
                            console.error("Error al guardar el archivo:", err);
                            return res.status(500).json({ error: "Error al guardar el archivo JSON." });
                        }

                        res.json({ message: "Componente guardado correctamente." });
                    });
                }
            });
        }

        // Función para manejar la petición POST y agregar el componente
        static addComponentPOST = (req, res = response) => {
            const newComponent = req.body;
            let key = newComponent.label.toLowerCase();
            key = key.replace(/\s+/g, "-"); // Reemplaza espacios por guiones

            let filename = newComponent.category.toLowerCase();
            filename = filename.replace(/\s+/g, "-"); // Reemplaza espacios por guiones
            const filePath = path.join(__dirname, "../public/js/block", `blocks-${filename}.json`);

            // Verificar si el archivo existe
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    // El archivo NO existe, lo creamos con un objeto vacío
                    fs.writeFile(filePath, JSON.stringify({ category: newComponent.category, filename: `blocks-${filename}.json`, data: {} }, null, 2), 'utf8', (err) => {
                        if (err) {
                            console.error("Error al crear el archivo:", err);
                            return res.status(500).json({ error: "Error al crear el archivo JSON." });
                        }
                        // Una vez creado, continuamos con el proceso normal
                        PageController.addComponentToFile(newComponent.category, `blocks-${filename}.json`, key, newComponent, filePath, res);
                    });
                } else {
                    // El archivo ya existe, seguimos directamente con la actualización
                    PageController.addComponentToFile(newComponent.category, `blocks-${filename}.json`, key, newComponent, filePath, res);
                }
            });
        };

        // Función para manejar la petición POST y agregar el componente
        static deleteComponentPOST = (req, res = response) => {
            const dataComponent = req.body;
            const key = dataComponent.key;
            const filename = dataComponent.filename;
    
            const filePath = path.join(__dirname, "../public/js/block", filename);
            
            // Leer el archivo JSON
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.log('Error al leer el archivo:', err);
                    return res.status(500).json({ message: 'Error al leer el archivo.' });
                }
    
                try {
                    // Parsear el JSON
                    let jsonData = JSON.parse(data);
    
                    // Verificar si la propiedad 'data' existe en el JSON
                    if (jsonData.data && jsonData.data[key]) {
                        delete jsonData.data[key]; // Eliminar el objeto con la clave 'key'
                        
                        // Guardar el archivo JSON modificado
                        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                            if (err) {
                                console.log('Error al escribir el archivo:', err);
                                return res.status(500).json({ message: 'Error al guardar el archivo.' });
                            } else {
                                console.log('Archivo JSON actualizado correctamente.');
                                return res.status(200).json({ message: 'Componente eliminado exitosamente.' });
                            }
                        });
                    } else {
                        console.log('No se encontró el componente con la clave:', key);
                        return res.status(404).json({ message: 'Componente no encontrado.' });
                    }
                } catch (parseError) {
                    console.log('Error al parsear el JSON:', parseError);
                    return res.status(500).json({ message: 'Error al parsear el archivo JSON.' });
                }
            });
        };
}

module.exports = PageController
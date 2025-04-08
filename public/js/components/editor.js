import { blocksExample } from '../block/blocks-example.js';
import { loadPage, deletePage, downloadZIP } from '../functions.js';

export function editor() {
    const editor = grapesjs.init({
        height: '100vh',
        storageManager: true,
        container: '#gjs',
        fromElement: true,
        plugins: [
            'gjs-blocks-basic',             // Agregar plugin de bloques básicos
            'grapesjs-plugin-forms',
            'grapesjs-component-countdown',
            'grapesjs-tabs',
            'grapesjs-custom-code',
            'grapesjs-tooltip',
            'grapesjs-typed'
        ],
        pluginsOpts: {
            'grapesjs-plugin-forms': {
                blocks: [
                    'form',     // Bloque de formulario
                    'input',    // Campo de entrada
                    'textarea', // Área de texto
                    'select',   // Lista desplegable
                    'button',   // Botón
                    'label',    // Etiqueta
                    'checkbox', // Casilla de verificación
                    'radio',    // Botones de radio
                    'email',    // Campo de email
                    'password'  // Campo de contraseña
                ]
            },
        },
        assetManager: {
            upload: true,
            assets: [
                {
                    type: 'image',
                    src: 'https://picsum.photos/id/237/200/300',
                    height: 300,
                    width: 200,
                    name: 'Ejemplo 1'
                },
                {
                    type: 'image',
                    src: 'https://picsum.photos/seed/picsum/200/300',
                    height: 300,
                    width: 200,
                    name: 'Ejemplo 2'
                },
                {
                    type: 'image',
                    src: 'https://fastly.picsum.photos/id/287/1200/800.jpg?hmac=e7Jgh7Yk7YtnlwGFvPly0-jKJZvIER9oSkZwisq3HoE',
                    height: 800,
                    width: 1200,
                    name: 'Ejemplo Image Hero'
                },
            ],
            // Configuración adicional (si es necesario)
            // Enable the Asset Manager to show in the modal dialog
            modalTitle: 'Selecciona una imagen',
            modalCloseBtnText: 'Cerrar',
        },
    });
    
    editor.on('load', () => {
        const blockManager = editor.BlockManager;
    
        for (const key in blocksExample) {
            if (blocksExample.hasOwnProperty(key)) {
                blockManager.add(key, blocksExample[key]);
            }
        }
    
        // Cambiar la categoría del bloque de tabs
        const tabsBlock = blockManager.get('tabs');
        if (tabsBlock) {
            tabsBlock.set('category', 'Extra');
        }
    
        // Cambiar la categoría del bloque de typed
        const typedBlock = blockManager.get('typed');
        if (typedBlock) {
            typedBlock.set('category', 'Extra');
        }
    
        // Llamar a la función para cargar la página
        loadPage(editor);
    });
    
    // Botones de los paneles
    editor.Panels.addButton('options', {
        id: 'download-html',
        className: 'fa fa-download',
        command: 'download-html',
        attributes: { title: 'Descargar HTML' },
    });
    
    editor.Panels.addButton('options', {
        id: 'save-page',
        className: 'fa fa-save',
        command: 'save-page',
        attributes: { title: 'Guardar página' },
    });
    
    editor.Panels.addButton('options', {
        id: 'clear-page',
        className: 'fa fa-trash',
        command: function(editor) {
            const confirmation = window.confirm('¿Estás seguro de que deseas borrar el contenido?');
            if (confirmation) {
                editor.setComponents('');
                editor.setStyle('');
                editor.store(false);

                localStorage.removeItem('gjs-components');
                localStorage.removeItem('gjs-styles');
                localStorage.removeItem('gjs-assets');

                console.log('Editor y localStorage limpiados');
                deletePage(server, editor);
            }
        },
        attributes: { title: 'Borrar' }
    });
    
    // Comandos que ejecutan los botones
    editor.Commands.add('download-html', {
        run(editor) {
            const htmlContent = editor.getHtml();
            const cssContent = editor.getCss();
    
            const zip = new JSZip();
    
            zip.file('index.html', htmlContent);
            zip.file('styles.css', cssContent); 
    
            zip.generateAsync({ type: 'blob' }).then(function (content) {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(content);
                link.download = 'pagina_grapejs.zip';
                link.click();
            });
        }
    });
    
    editor.Commands.add('save-page', {
        run: async function (editor) {
            const htmlContent = editor.getHtml();
            const cssContent = editor.getCss();

            // Obtener los datos del editor
            const storedProjectData = await editor.store();
            console.log(storedProjectData);
    
            // Enviar los datos al servidor
            fetch('/save-page', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: storedProjectData, html: { htmlContent }, css: { cssContent } }) // Los datos están dentro de una propiedad 'data'
            })
            .then(response => response.json())
            .then(data => {
                console.log('Proyecto guardado correctamente', data);
            })
            .catch(error => {
                console.error('Error al guardar el proyecto:', error);
            });
        }
    });

    // Botón "Descagar ZIP" del modal Code
    downloadZIP();
}


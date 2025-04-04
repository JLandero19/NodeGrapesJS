// Hacer una solicitud GET al servidor para obtener los datos de la página
export async function loadPage(editor) {
    try {
        // Realizamos la solicitud GET
        const response = await fetch(`${server}/load-page`);

        // Comprobamos si la respuesta fue exitosa
        if (response.ok) {
            const data = await response.json();  // Parseamos los datos JSON

            // Si los datos existen, cargarlos en el editor de GrapesJS
            console.log('Datos de la página cargados:', data);
            
            editor.loadProjectData(data);
        } else if (response.status === 404) {
            // Si no se encuentra el archivo
            console.log('No hay ninguna página cargada');
        } else {
            throw new Error('No se pudo cargar la página');
        }
    } catch (error) {
        console.error('Error al cargar la página:', error);
    }
}

export function downloadZIP() {
    const modalCode = document.querySelector('.gjs-mdl-content');
    const zip = document.createElement('button');
    zip.id = 'download-zip-btn';
    zip.textContent = 'Descargar ZIP';
    zip.style.marginTop = '10px';
    zip.style.padding = '10px';
    zip.style.background = '#4CAF50';
    zip.style.color = 'white';
    zip.style.border = 'none';
    zip.style.cursor = 'pointer';

    zip.onclick = function () {
        const zip = new JSZip();
        zip.file('index.html', editor.getHtml());
        zip.file('styles.css', editor.getCss());

        zip.generateAsync({ type: 'blob' }).then(function (content) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(content);
            link.download = 'pagina_grapejs.zip';
            link.click();
        });
    };

    modalCode.appendChild(zip);
}
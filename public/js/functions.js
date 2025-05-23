// Hacer una solicitud GET al servidor para obtener los datos de la página
export async function loadPage(editor) {
    try {
        // Realizamos la solicitud GET
        const response = await fetch(`/load-page`);

        // Comprobamos si la respuesta fue exitosa
        if (response.ok) {
            const data = await response.json();  // Parseamos los datos JSON

            // Si los datos existen, cargarlos en el editor de GrapesJS
            console.log('Datos de la página cargados:', data);
            editor.loadProjectData(data.data);
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

export async function deletePage(editor) {
    try {
        // Realizamos la solicitud GET
        const response = await fetch(`/delete-page`);

        // Comprobamos si la respuesta fue exitosa
        if (response.ok) {
            const data = await response.json();
            // Aquí puedes hacer algo con los datos recibidos, como mostrar un mensaje
            console.log('Página eliminada con éxito:', data);
        } else if (response.status === 404) {
            // Si no se encuentra el archivo
            console.log('No hay ninguna página cargada para eliminar');
        } else {
            throw new Error('No se pudo eliminar la página');
        }
    } catch (error) {
        console.error('Error al eliminar la página:', error);
    }
}

export function downloadZIP(editor) {
    const modalCode = document.querySelector('.gjs-mdl-content');
    const downloadBtn = document.createElement('button');
    downloadBtn.id = 'download-zip-btn';
    downloadBtn.textContent = 'Descargar ZIP';
    downloadBtn.style.marginTop = '10px';
    downloadBtn.style.padding = '10px';
    downloadBtn.style.background = '#4CAF50';
    downloadBtn.style.color = 'white';
    downloadBtn.style.border = 'none';
    downloadBtn.style.cursor = 'pointer';

    downloadBtn.onclick = function () {
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

    modalCode.appendChild(downloadBtn);
}

// export function importJSON(blockManager) {
//     fetch('./js/block/blocks-example.json')
//         .then(response => response.json())  // Convierte la respuesta a formato JSON
//         .then(data => {
//             // console.log(data);  // Aquí tienes el contenido del JSON
//             for (const key in data) {
//                 if (data.hasOwnProperty(key)) {
//                     blockManager.add(key, data[key]);
//                 }
//             }
//             return data;
//         })
//         .catch(error => {
//             console.error('Error al obtener el archivo JSON:', error);
//         });
// }

export function importJSON(blockManager) {
    fetch('/get-component')
        .then(response => response.json())  // Convierte la respuesta a formato JSON
        .then(dataArray => {
            dataArray.forEach(item => {
                const content = item.content;
                for (const key in content) {
                    if (content.hasOwnProperty(key)) {
                        blockManager.add(key, content[key]);
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error al obtener los bloques JSON:', error);
        });
}

export function createAlert(type = "success", msg) {
    const resultContent = document.getElementById("result-operation");
    resultContent.innerHTML = "";
    // Crear el div
    const alertDiv = document.createElement('div');

    // Agregar las clases de Bootstrap
    alertDiv.classList.add('alert', `alert-${type}`);

    // Establecer el atributo role
    alertDiv.setAttribute('role', 'alert');

    // Establecer el contenido del alert
    alertDiv.textContent = msg;

    // Finalmente lo puedes agregar al DOM, por ejemplo al body o a otro contenedor:
    resultContent.appendChild(alertDiv); // o cualquier otro contenedor
}
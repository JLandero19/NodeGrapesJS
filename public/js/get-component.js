export function getComponent() {
    let container = document.getElementById("accordionCategories");
    container.innerHTML = ``;
    fetch('/get-component')
        .then(response => response.json())  // Convierte la respuesta a formato JSON
        .then(dataArray => {
            let contentCategory = ``;
            dataArray.forEach((item, key) => {
                const category = item.category;
                const filename = item.filename;
                const content = item.content;

                if (Object.keys(content).length >= 1) {
                    contentCategory = ``;
                    contentCategory += `
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${key}">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#category${key}"
                                    aria-expanded="false"
                                    aria-controls="category${key}">
                                    ${category}
                                </button>
                            </h2>
                            <div id="category${key}" class="accordion-collapse collapse" aria-labelledby="heading${key}">
                                <div class="accordion-body">
                                    <div class="row">
                    `;

                    for (const i in content) {
                        if (content.hasOwnProperty(i)) {
                            contentCategory += `
                                        <div class="col-md-6">
                                            <div class="item-box position-relative">
                                                <button class="btn btn-danger btn-sm position-absolute top-0 end-0 m-2" id="${i}">
                                                    <i class="fas fa-trash-alt"></i>
                                                </button>
                                                <div class="item-icon">
                                                    <i class="${content[i].attributes.class}"></i>
                                                </div>
                                                <div class="item-title">
                                                    ${content[i].label}
                                                </div>
                                            </div>
                                        </div>
                            `;
                        }
                    }

                    contentCategory += `                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    container.innerHTML += contentCategory;
                }
            });
            if (contentCategory == "") {
                container.innerHTML += `<h5 class="text-center">No hay componentes</h5>`;
            }

            dataArray.forEach((item) => {
                const filename = item.filename;
                const content = item.content;

                for (const i in content) {
                    if (content.hasOwnProperty(i)) {
                        document.getElementById(i).addEventListener("click", () => deleteComponent(filename, i));
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error al obtener los bloques JSON:', error);
        });
}

export function deleteComponent(filename, key) {
    console.log(`clave: ${key} - fichero: ${filename}`);

    fetch("/delete-component", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: filename, key: key })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            // createAlert("success", data.message);
            getComponent();
        })
        .catch(err => {
            console.error("Error al eliminar:", err);
            // createAlert("danger", data.message);
        });
    // No funciona
}

getComponent();
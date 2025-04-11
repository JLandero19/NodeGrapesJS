async function getFreeFontAwesomeIcons() {
    const response = await fetch(
        "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/metadata/icons.json"
    );
    const data = await response.json();
    const freeIcons = Object.entries(data)
        .filter(
            ([_, iconData]) =>
                iconData.free && iconData.free.length > 0
        )
        .map(([name, iconData]) => ({
            name,
            style: iconData.free[0], // Usamos el primer estilo disponible (como 'solid')
        }));

    return freeIcons;
}

async function setupIconSelect() {
    const iconList = await getFreeFontAwesomeIcons();
    const selectElement = document.getElementById("icon-select");
    selectElement.innerHTML = ""; // Limpiar el select

    // Agregar la opción por defecto
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = "Selecciona un ícono";
    selectElement.appendChild(placeholderOption);

    // Rellenar el select con las opciones
    iconList.forEach((icon) => {
        const value = `fa fa-${icon.name}`;
        const label = `${icon.name}`;
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        selectElement.appendChild(option);
    });

    // Inicializar Select2
    $(selectElement).select2({
        placeholder: "Buscar ícono...",
        allowClear: true,
        templateResult: formatIconOption,
        templateSelection: formatIconOption,
    });

    // Mostrar ícono al seleccionar
    selectElement.addEventListener("change", function () {
        const selected = this.value;
        const preview = document.getElementById("icon-preview");
        if (!selected) {
            preview.innerHTML = "";
            return;
        }
        const [style, name] = selected.split("|");
        preview.innerHTML = `<i class="fa-${style} fa-${name}"></i> <span class="ms-2">${name}</span>`;
    });
}

// Función que devuelve el ícono + nombre formateado para cada opción
function formatIconOption(option) {
    if (!option.id) return option.text; // Placeholder
    const [style, name] = option.id.split(" ");
    const span = document.createElement("span");
    const icon = document.createElement("i");
    icon.className = `${style} ${name} mx-2`;
    span.appendChild(icon);
    span.appendChild(document.createTextNode(`${style} ${name}`));
    return span;
}

// Iniciar
setupIconSelect();
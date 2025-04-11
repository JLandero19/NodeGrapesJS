async function getFreeFontAwesomeIcons() {
    const response = await fetch('https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/metadata/icons.json');
    const data = await response.json();

    const freeIcons = Object.entries(data)
        .filter(([_, iconData]) => iconData.free && iconData.free.length > 0)
        .map(([name, iconData]) => ({
            name,
            style: iconData.free[0] // usamos el primer estilo disponible (por ejemplo: 'solid')
        }));

    return freeIcons;
}
async function renderIcons() {
    const icons = await getFreeFontAwesomeIcons();
    const container = document.getElementById('icon-container');
    container.innerHTML = ''; // limpiar "Cargando..."
    // Mostramos solo los primeros 50 para no saturar
    icons.forEach(({ name, style }) => {
        const icon = document.createElement('i');
        icon.className = `fa-${style} fa-${name}`;
        icon.title = name;
        container.appendChild(icon);
    });
}

renderIcons();

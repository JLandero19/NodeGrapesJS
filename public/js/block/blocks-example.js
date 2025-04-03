export const blocksExample = {
    'hero-section': {
        label: 'Hero Section',  // Nombre del bloque
        category: 'Example',  // Categoría del bloque en el panel
        attributes: { class: 'fa fa-image' },  // Ícono del bloque
        content: `
            <section class="hero" style="position: relative; height: 75vh; background-size: cover; background-position: center; text-align: center;">
                <div class="hero-content" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                    <h1 style="font-size: 3rem; margin-bottom: 20px;">Bienvenidos a Nuestra Página</h1>
                    <p style="font-size: 1.2rem; margin-bottom: 30px;">
                        Esta es la descripción de nuestra sección hero. Puedes personalizarla como desees.
                    </p>
                    <a href="#cta" class="cta-button" style="padding: 10px 20px; font-size: 1rem; text-decoration: none; border-radius: 5px;">
                        Descubre más
                    </a>
                </div>
            </section>
        `
    },
};
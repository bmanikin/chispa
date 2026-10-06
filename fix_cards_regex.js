const fs = require('fs');

const files = ['index.html', 'static/index.html'];

for (let file of files) {
    if (!fs.existsSync(file)) continue;
    let html = fs.readFileSync(file, 'utf8');

    // 1. Replace Laberinto -> Sanitarios
    html = html.replace(
        /<img src="\/static\/images\/drive\/k\.jpg"[\s\S]*?Laberinto y soft play<\/h4>\s*<p[^>]*>.*?<\/p>\s*<\/div>/,
        `<img src="/static/images/sanitarios.jpg" alt="Sanitarios y Cuidado Familiar" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    <div style="padding: 1.2rem; text-align: left;">
                        <h4 style="margin: 0 0 0.4rem; color: var(--secondary-color);">Sanitarios & Cuidado Familiar</h4>
                        <p style="margin: 0; font-size: 0.88rem; color: #777;">Espacios impecables con áreas de cambio y amenidades de confort pensadas para la tranquilidad de tu familia.</p>
                    </div>`
    );

    // 2. Combine games into Nannys card
    html = html.replace(
        /<h4[^>]*>Cuidado de nannys calificadas<\/h4>\s*<p[^>]*>.*?<\/p>/,
        `<h4 style="margin: 0 0 0.4rem; color: var(--secondary-color);">Ludoteca, laberinto y soft play</h4>
                        <p style="margin: 0; font-size: 0.88rem; color: #777;">Área de juego motriz y nannys calificadas para la diversión y seguridad de tus pequeños.</p>`
    );

    fs.writeFileSync(file, html, 'utf8');
}

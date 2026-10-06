const fs = require('fs');

const files = ['index.html', 'static/index.html'];

for (let file of files) {
    if (!fs.existsSync(file)) continue;
    let html = fs.readFileSync(file, 'utf8');

    // 1. Replace Laberinto -> Sanitarios
    // We'll use a string replacement to avoid regex dot-all issues with newlines
    const laberintoBlock = `<div style="border-radius: 16px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.06); background: white;">
                    <img src="/static/images/drive/k.jpg" alt="Laberinto y Juegos Infantiles" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    <div style="padding: 1.2rem; text-align: left;">
                        <h4 style="margin: 0 0 0.4rem; color: var(--secondary-color);">Laberinto y soft play</h4>
                        <p style="margin: 0; font-size: 0.88rem; color: #777;">`;
    
    // Find where the block starts
    let startIndex = html.indexOf(laberintoBlock);
    if (startIndex !== -1) {
        let endIndex = html.indexOf('</div>\n                </div>', startIndex);
        if (endIndex !== -1) {
            let fullBlock = html.substring(startIndex, endIndex + 30);
            
            let newBlock = `<div style="border-radius: 16px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.06); background: white;">
                    <img src="/static/images/sanitarios.jpg" alt="Sanitarios y Cuidado Familiar" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    <div style="padding: 1.2rem; text-align: left;">
                        <h4 style="margin: 0 0 0.4rem; color: var(--secondary-color);">Sanitarios & Cuidado Familiar</h4>
                        <p style="margin: 0; font-size: 0.88rem; color: #777;">Espacios impecables con áreas de cambio y amenidades de confort pensadas para la tranquilidad de tu familia.</p>
                    </div>
                </div>`;
            
            html = html.replace(fullBlock, newBlock);
        }
    }

    // 2. Combine games into Nannys card
    // Current Nannys card:
    const nannysBlock = `<div style="border-radius: 16px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.06); background: white;">
                    <img src="/static/images/drive/dd.jpg" alt="Ludoteca con Nannys" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    <div style="padding: 1.2rem; text-align: left;">
                        <h4 style="margin: 0 0 0.4rem; color: var(--secondary-color);">Cuidado de nannys calificadas</h4>
                        <p style="margin: 0; font-size: 0.88rem; color: #777;">`;
    
    let nannysIndex = html.indexOf(nannysBlock);
    if (nannysIndex !== -1) {
        let nannysEndIndex = html.indexOf('</div>\n                </div>', nannysIndex);
        if (nannysEndIndex !== -1) {
            let fullNannysBlock = html.substring(nannysIndex, nannysEndIndex + 30);
            
            let newNannysBlock = `<div style="border-radius: 16px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.06); background: white;">
                    <img src="/static/images/drive/dd.jpg" alt="Ludoteca y Juegos" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    <div style="padding: 1.2rem; text-align: left;">
                        <h4 style="margin: 0 0 0.4rem; color: var(--secondary-color);">Ludoteca, laberinto y soft play</h4>
                        <p style="margin: 0; font-size: 0.88rem; color: #777;">Área de juego motriz y nannys calificadas para la diversión y seguridad de tus pequeños.</p>
                    </div>
                </div>`;
            
            html = html.replace(fullNannysBlock, newNannysBlock);
        }
    }

    fs.writeFileSync(file, html, 'utf8');
}

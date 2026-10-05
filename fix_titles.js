const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('Coworking con Vista a Ludoteca', 'Coworking con vista a ludoteca');
html = html.replace('Party Center y Shows en Vivo', 'Party center y shows en vivo');
html = html.replace('Terraza Familiar</h4>', 'Terraza familiar</h4>');
html = html.replace('Cuidado de Nannys Calificadas', 'Cuidado de nannys calificadas');
html = html.replace('Laberinto y Soft Play', 'Laberinto y soft play');
fs.writeFileSync('index.html', html, 'utf8');

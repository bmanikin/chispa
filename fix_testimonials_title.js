const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('Lo que dicen nuestras familias', 'Experiencias compartidas');
fs.writeFileSync('index.html', html, 'utf8');

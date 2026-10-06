const fs = require('fs');
const files = ['index.html', 'static/index.html'];

for (let file of files) {
    if (!fs.existsSync(file)) continue;
    let html = fs.readFileSync(file, 'utf8');

    html = html.replace(/Diversi\uFFFDn/g, 'Diversión');

    fs.writeFileSync(file, html, 'utf8');
}

const fs = require('fs');

// Fix index.html
let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace('<section style="background: #FAFAFA; padding: 4.5rem 0; border-top: 1px solid #ECECEC; border-bottom: 1px solid #ECECEC;">', '<section style="padding: 4.5rem 0; border-top: 1px solid #ECECEC; border-bottom: 1px solid #ECECEC;">');
fs.writeFileSync('index.html', indexContent, 'utf8');
if (fs.existsSync('static/index.html')) fs.writeFileSync('static/index.html', indexContent, 'utf8');

// Fix fiestas.html
let fiestasContent = fs.readFileSync('fiestas.html', 'utf8');
fiestasContent = fiestasContent.replace('<section style="background: var(--light-bg); padding: 3rem 0;">', '<section style="padding: 3rem 0;">');
fiestasContent = fiestasContent.replace('<main id="cotizador" style="background: white; padding: 3.5rem 0; scroll-margin-top: 90px;">', '<main id="cotizador" style="padding: 3.5rem 0; scroll-margin-top: 90px;">');
fs.writeFileSync('fiestas.html', fiestasContent, 'utf8');
if (fs.existsSync('static/fiestas.html')) fs.writeFileSync('static/fiestas.html', fiestasContent, 'utf8');


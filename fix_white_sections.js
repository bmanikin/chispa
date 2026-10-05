const fs = require('fs');

const files = ['index.html', 'checkout.html', 'fiestas.html', 'cafeteria.html', 'contacto.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/<section style="background: white;/g, '<section style="');
        content = content.replace(/<section style="background-color: white;/g, '<section style="');
        fs.writeFileSync(file, content, 'utf8');
        
        // Also update the static directory equivalents
        let staticFile = `static/${file}`;
        if (fs.existsSync(staticFile)) {
             fs.writeFileSync(staticFile, content, 'utf8');
        }
    }
});

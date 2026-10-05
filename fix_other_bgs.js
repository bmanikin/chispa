const fs = require('fs');
['cafeteria.html', 'contacto.html'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/background: (?:#FAFAFA|white|var\(--light-bg\));?/g, '');
        content = content.replace(/background-color: (?:#FAFAFA|white|var\(--light-bg\));?/g, '');
        fs.writeFileSync(file, content, 'utf8');
        if (fs.existsSync('static/' + file)) fs.writeFileSync('static/' + file, content, 'utf8');
    }
});

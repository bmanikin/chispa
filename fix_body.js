const fs = require('fs');
['cafeteria.html', 'contacto.html', 'checkout.html'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/<body style="background-color: var\(--light-bg\);">/g, '<body>');
        fs.writeFileSync(file, content, 'utf8');
        if (fs.existsSync('static/' + file)) fs.writeFileSync('static/' + file, content, 'utf8');
    }
});

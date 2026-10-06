const fs = require('fs');
const files = ['index.html', 'static/index.html'];

for (let file of files) {
    if (!fs.existsSync(file)) continue;
    let html = fs.readFileSync(file, 'utf8');

    const liMatch = '<li><span class="benefit-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v8a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V2"></path><line x1="12" y1="14" x2="12" y2="22"></line><line x1="8" y1="22" x2="16" y2="22"></line></svg></span> Servicio completo de catering</li>';
    const newLi = '<li><span class="benefit-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></span> Diversión, seguridad y convivencia asegurada</li>';

    html = html.replace(liMatch, liMatch + '\n                          ' + newLi);

    // Fix possible encoding issue with ? if existing
    html = html.replace(/Diversi\?n/g, 'Diversión');

    fs.writeFileSync(file, html, 'utf8');
}

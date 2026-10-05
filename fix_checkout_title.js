const fs = require('fs');
let html = fs.readFileSync('checkout.html', 'utf8');
const original = '<h1 class="section-title text-center">Elige tu Plan Ideal</h1>';
const replacement = `<div class="text-center" style="margin-bottom: 2rem;">
            <h1 class="section-title" style="margin-bottom: 0.4rem; text-transform: uppercase;">CHISPA PRIVATE ACCESS</h1>
            <p style="font-size: 1.25rem; color: #666; font-family: var(--font-body); margin: 0;">Elige tu experiencia</p>
        </div>`;
html = html.replace(original, replacement);
fs.writeFileSync('checkout.html', html, 'utf8');

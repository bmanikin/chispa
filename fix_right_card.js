const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const target = `<div style="flex: 1; min-width: 320px; display: flex; justify-content: center;">`;
const replacement = `<div style="flex: 1; min-width: 320px; display: flex; justify-content: center; background: #fff; border-radius: 16px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e8e8e8;">`;

content = content.replace(target, replacement);

fs.writeFileSync('index.html', content, 'utf8');
if (fs.existsSync('static/index.html')) {
    fs.writeFileSync('static/index.html', content, 'utf8');
}

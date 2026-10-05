const fs = require('fs');
let css = fs.readFileSync('static/styles.css', 'utf8');
css = css.replace(/\.marquee-section \{([\s\S]*?)background: var\(--light-bg\);/, '.marquee-section {$1background: transparent;');
fs.writeFileSync('static/styles.css', css, 'utf8');

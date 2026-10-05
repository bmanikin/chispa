const fs = require('fs');
let css = fs.readFileSync('static/styles.css', 'utf8');

css = css.replace(/\.acerca-bg \{\s*background-color: var\(--light-bg\);\s*\}/, '.acerca-bg { /* transparent to show body pattern */ }');
css = css.replace(/\.marquee-header-container \{([\s\S]*?)background: var\(--light-bg\);/, '.marquee-header-container {$1background: transparent;');

fs.writeFileSync('static/styles.css', css, 'utf8');

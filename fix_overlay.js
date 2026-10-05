const fs = require('fs');
let css = fs.readFileSync('static/styles.css', 'utf8');

css = css.replace(/transform:\s*translateX\(100%\);/g, 'left: 100%; visibility: hidden;');
css = css.replace(/transform:\s*translateX\(0\);/g, 'left: 0; visibility: visible;');
css = css.replace(/transition:\s*transform/g, 'transition: left');

fs.writeFileSync('static/styles.css', css, 'utf8');

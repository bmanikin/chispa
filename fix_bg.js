const fs = require('fs');
let css = fs.readFileSync('static/styles.css', 'utf8');

const replacement = `body {
  background-color: var(--light-bg);
  background-image: url("data:image/svg+xml,%3Csvg width='160' height='160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.08'%3E%3Cpath d='M30 15 Q30 30 15 30 Q30 30 30 45 Q30 30 45 30 Q30 30 30 15 Z' fill='%235B8FA8'/%3E%3Cpath d='M110 50 Q110 58 102 58 Q110 58 110 66 Q110 58 118 58 Q110 58 110 50 Z' fill='%23E83D7C'/%3E%3Cpath d='M50 110 Q50 120 40 120 Q50 120 50 130 Q50 120 60 120 Q50 120 50 110 Z' fill='%23D4A843'/%3E%3Cpath d='M130 130 Q130 136 124 136 Q130 136 130 142 Q130 136 136 136 Q130 136 130 130 Z' fill='%23CCD838'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  color: var(--dark-color);`;

css = css.replace(/body\s*\{\s*background:\s*var\(--light-bg\);\s*color:\s*var\(--dark-color\);/, replacement);
fs.writeFileSync('static/styles.css', css, 'utf8');

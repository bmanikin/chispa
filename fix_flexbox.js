const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const original =                     </div>
                </div>
            </div>

                <div style="flex: 1; min-width: 320px; display: flex; justify-content: center;">;

const replacement =                     </div>
                </div>

                <div style="flex: 1; min-width: 320px; display: flex; justify-content: center;">;

html = html.replace(original, replacement);
fs.writeFileSync('index.html', html, 'utf8');

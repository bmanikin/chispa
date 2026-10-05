const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html')).concat(fs.readdirSync('static').filter(f => f.endsWith('.html')).map(f => 'static/' + f));
files.forEach(file => {
 let content = fs.readFileSync(file, 'utf8');
 content = content.replace(/Membres.a/g, Buffer.from('TWVtYnJlc8OtYQ==', 'base64').toString('utf8')).replace(/Cafeter.a/g, Buffer.from('Q2FmZXRlcsOtYQ==', 'base64').toString('utf8'));
 fs.writeFileSync(file, content, 'utf8');
 console.log('Fixed ' + file);
});
const fs = require('fs');
const path = require('path');

const targets = [
  path.join(__dirname, '.vercel', 'output', 'static'),
  path.join(__dirname, 'out'),
  path.join(__dirname, 'dist'),
  path.join(__dirname, 'public')
];

const filesToCopy = ['index.html', '404.html', '_redirects', '_headers', '_routes.json', '_worker.js'];

for (const target of targets) {
  fs.mkdirSync(target, { recursive: true });
  for (const file of filesToCopy) {
    const src = path.join(__dirname, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(target, file));
    }
  }
}

console.log('Build completed successfully. 404 static targets generated.');

const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    'dist/runtime.js',
    'dist/polyfills.js',
    'dist/main.js',
  ]

  await fs.ensureDir('myElement');
  await concat(files, 'myElement/band-name-generator.js');
  await fs.copyFile('dist/styles.css', 'myElement/styles.css');
//   await fs.copy('dist/assets/', 'myElement/assets/' );

})()

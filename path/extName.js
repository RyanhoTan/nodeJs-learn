const path = require('path');

const filePath = __dirname + '/halo.js';
console.log(filePath);

const extName = path.extname(filePath);

console.log(extName);
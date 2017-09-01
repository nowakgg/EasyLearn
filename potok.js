var fs = require('fs');

var readable = fs.createReadStream('./data.txt');

var writeable = fs.createWriteStream('./dataCOPY2.txt');


readable.pipe(writeable);
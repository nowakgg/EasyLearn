var fs = require('fs');

var readable = fs.createReadStream('./data.txt', {encoding: 'utf-8'});

var writeable = fs.createWriteStream('./dataCOPY.txt');


readable.on('data', function(chunk) {
    //console.log(chunk);
    writeable.write(chunk);
});



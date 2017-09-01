var http = require('http');
var fs = require('fs');

http.createServer(function(req, res)
{
    res.writeHead(200, {'content-type' : 'text/html'});
    var html = fs.readFileSync('./index.html', 'utf-8');
    html = html.replace('{ Header }', 'nowakgg');
    res.end(html);
}).listen(3000);

console.log('Serwer uruchomiony ...')
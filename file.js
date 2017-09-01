var fs = require('fs');

fs.readdir('./', function(error, fileList){
    console.log(error);
    console.log(fileList);
});


fs.readFile('./data.txt', 'utf-8', function(error, file)
{
    console.log(file);
});

var fileData = `<html>

</html`;
fs.writeFile('./data.txt', fileData, function(error)
{
    console.log('Zapisano');
});

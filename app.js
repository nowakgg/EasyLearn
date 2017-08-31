var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log(process.platform);

rl.question('Jak masz na imię? ', function(answer){
    rl.setPrompt('jak lubisz ? ' + answer + ' ? ');
    rl.prompt();
    rl.on('line', function(language){
        console.log(language)
    });
    process.env;
    
});
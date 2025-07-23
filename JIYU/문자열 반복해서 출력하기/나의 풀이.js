const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    if(str.lenght>=1||str.lenght<=10);
    if(n>=1||n<=10);
    
    console.log(str.repeat(n));
});
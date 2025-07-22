const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    if(Number(input[0])<-100000)return;
    if(Number(input[1])>100000)return;
    
    console.log('a =', Number(input[0]));
    console.log('b =', Number(input[1]));
});
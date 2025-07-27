const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    let str = input[0];
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();  
        } else {
            result += str[i].toLowerCase();  
        }
    }

    console.log(result);
});

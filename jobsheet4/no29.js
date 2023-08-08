const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => { 
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`Kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
});
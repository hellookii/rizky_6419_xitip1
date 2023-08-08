const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => { 
    const kalimatLowerCase = kalimat.toLowerCase();
    console.log(`Kalimat dalam huruf kecil: ${kalimatLowerCase}`);
    rl.close();
});
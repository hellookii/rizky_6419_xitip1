// Lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Sebuah Kalimat: ", (inputString) => {
    // Contoh Property lenght
    console.log(`Panjang Kalimat: ${inputString.length}`);
    rl.close();
});

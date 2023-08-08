const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan sebuah kalimat: ', (inputString)=>{
    rl.question('Masukan indeks yang ingin anda cek: ', (index)=>{
        index = Number(index);
        if (index >= 0 && index < inputString.length) {
        const character = inputString.charAt(index);
        console.log(`Karakter pada indeks ${index}: ${character}`);
        } else {
        console.log('Indeks tidak valid');
        }
        rl.close();
    });
});
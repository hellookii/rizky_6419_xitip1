const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// charAt
rl.question("Masukan Sebuah Kalimat: ", (inputString) => {
    rl.question("Masukan indeks yang ingin anda cek: ", (index) => {
        // Konversi nilai index ke tipe number
        index = Number(index);
        // periksa apakah index valid (berada dalam rentang string)
        if (index >= 0 && index < inputString.length) {
            // gunakan method charAt untuk mendapatkan karakter pada indexs yang diminta
            const character = inputString.charAt(index);
            console.log(`karakter pada indexs ${index}: ${character}`);
        } else {
            console.log("Indeks tidak valid");
        }
        rl.close();
    });
});
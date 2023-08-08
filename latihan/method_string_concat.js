const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Kalimat pertama: ", (kalimat1) => {
    rl.question("Masukan Kalimat kedua: ", (kalimat2) => {
        // menggabungkan kalimat1 dan kalimat2 menggunakan method concat()
        const kalimatGabungan = kalimat1.concat(kalimat2);
        console.log(`Hasil Penggabungan: ${kalimatGabungan}`);
        rl.close();
    });
});
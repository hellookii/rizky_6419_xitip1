const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => { 
    rl.question ("Masukkan kata yang ingin Anda cari: ", (kataCari) => {
        const indeksKataTerakhir = kalimat.lastIndexOf(kataCari);
        if (indeksKataTerakhir !== -1) {
            console.log(`Kata '${kataCari}' ditemukan pada indeks terakhir: ${indeksKataTerakhir}`);
        } else {
        console.log(`Kata '${kataCari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});
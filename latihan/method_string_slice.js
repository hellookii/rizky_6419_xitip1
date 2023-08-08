const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Masukan sebuah Kalimat: ", (kalimat) => {
    rl.question("Masukan indeks awal: ", (startIndex) => {
        rl.question("Masukan indeks akhir: ", (endtIndex) => {
            // konversi nilai indeks ke tipe Number
            startIndex = Number(startIndex);
            endtIndex = Number(endtIndex);
            // gunakan method substring untuk mengambil substring dari startindex hingga endIndex
            const slicedSubstring = kalimat.substring(startIndex, endtIndex);
            console.log(`hasil slice dari indeks ${startIndex} hingga ${endtIndex}: ${slicedSubstring}`);
            rl.close();
        });
    });
});
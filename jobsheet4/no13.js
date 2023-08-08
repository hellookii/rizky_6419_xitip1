const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan sebuah kalimat: ', (kalimat)=>{
    rl.question('Masukan kata yang anda cari: ', (kataCari)=>{
        const indexKata = kalimat.indexOf(kataCari);
        if (indexKata !== -1) {
            console.log(`Kata ${kataCari} ditemukan pada indeks: ${indexKata}`);
        } else {
            console.log(`Kata ${kataCari} tidak ditemukan pada kalimat`);
        }
        rl.close();
    })
})
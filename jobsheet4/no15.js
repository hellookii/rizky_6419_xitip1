const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    rl.question("Masukan Kata yang ingin dicari: ", (kataCari)=>{
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`Kata ${kataCari} pertama kali muncul pada indeks ${indeksKata}`);
        } else {
            console.log(`Kata ${kataCari} tidak ditemukan pada kalimat`);
        }
        rl.close()
    })
})
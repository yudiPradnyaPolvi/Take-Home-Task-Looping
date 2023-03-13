console.log("Menampilkan Output dengan Metode Loop")

console.log ("Penggunaan For Loop")

let batasForLoop = 6;
let Print = "Hallo Semua, sebenarnya saya adalah "
for (let i=0;i<=batasForLoop;i++){
    console.log (Print,i,"orang");
}

let  awal = 12;
let batasForLoops = 0;
let hitungMundur = "Mari Kita Hitung Mundur Anak Kuda"
console.log (hitungMundur);
for (awal;awal >=  batasForLoops;awal--){
    console.log (awal,"anak kuda");
}

console.log ("Penggunaan WhileLoop")

let output ="";
let outputLain ="";
let awalan =1;
while (awalan < 5) {
  output = "The number is " + awalan;
  outputLain += "The number is " + awalan;
  
console.log(output)
console.log(outputLain)
awalan++;

}

let awal1=0;
while (awal1 <= 6){
    if (awal1<=6){
    ulangi=false
    }
    console.log ("hallo Saya Budi",awal1)
    awal1++
    
}

console.log ("Penggunaan doWhileLoop")

let awal2 = 2
do {
    console.log("Saya Tidak Akan Mengulangi Lagi",awal2);
    awal2++;

}while (awal2<=12);

let awalDoWhile = 2
let batasDoWhile =10
do {
    console.log("Saya Anak Baik dan Suka Menabung",awalDoWhile);
    awalDoWhile++;

}while (awalDoWhile<batasDoWhile);

console.log ("Penerapan Array dengan Perulangan")

console.log ("For Looping")
let motor =["Nmax","PCX","Beat","Vario"]
for (let awalFor=0;awalFor<motor.length;awalFor++){
    console.log (motor[awalFor],awalFor)
}

console.log ("While Looping")
const provinsi = [" Bali ", " Jawa Barat ", " Lombok ", " Kalimantan Barat "];
let awalWhile = 0;
let text = " ";

while (provinsi[awalWhile]) {
  text += provinsi[awalWhile];
console.log (text)
awalWhile++
}

console.log ("DoWhile Looping")
let rasa = ["vanila","coklat","tiramisu"]
let awalDoWhile2=1;
let akhirDoWhile =9;
do {
    console.log ("aku suka rasa",rasa[awalDoWhile2])
    awalDoWhile++
}while(awalDoWhile2>=akhirDoWhile)

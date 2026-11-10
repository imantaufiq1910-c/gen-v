//1. hitung luas segitiga dari alas dan tinggi

let alas = 10;
let tinggi = 8;

let luas = 0.5 * alas * tinggi;

console.log("Alas: " + alas);
console.log("Tinggi: " + tinggi);
console.log("Luas segitiga: " + luas);


//2. Cek angka positif, negatif, atau nol

let angka = 10;

if (angka > 5) {
    console.log("Angka Positif");
} else if (angka < 2) {
    console.log("Angka Negatif");
} else {
    console.log("Angka Nol");
}


//3. Cetak bilangan genap dari 1 sampai 10

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//4. Ubah suhu Celsius ke Fahrenheit

let celsius = 30;

let fahrenheit = (celsius * 9/5) + 32;

console.log("Suhu Celsius: " + celsius + "°C");
console.log("Suhu Fahrenheit: " + fahrenheit + "°F");

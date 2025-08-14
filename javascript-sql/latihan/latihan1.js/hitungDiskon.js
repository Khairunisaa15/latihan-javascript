// File: hitungDiskon.js

// Harga makanan
const nasiGoreng = 25000;
const mieGoreng = 22000;
const capcay = 32000;

// Menampilkan harga makanan
console.log("Harga Nasi Goreng: Rp" + nasiGoreng);
console.log("Harga Mie Goreng: Rp" + mieGoreng);
console.log("Harga Capcay: Rp" + capcay);

// Menghitung total harga sebelum diskon
const totalHarga = nasiGoreng + mieGoreng + capcay;
console.log("Harga Total: Rp" + totalHarga);

// Diskon 10%
const diskon = 0.10;
const potonganDiskon = totalHarga * diskon;
console.log("Potongan diskon (10%): Rp" + potonganDiskon);

// Menghitung harga setelah diskon
const hargaSetelahDiskon = totalHarga - potonganDiskon;
console.log("Harga setelah diskon: Rp" + hargaSetelahDiskon);

// Pembayaran
const pembayaran = 100000;

// Menghitung kembalian
const kembalian = pembayaran - hargaSetelahDiskon;
console.log("Pembayaran: Rp" + pembayaran);
console.log("Kembalian: Rp" + kembalian);
//Data makanan dan harga
const makanan = [
    {nama: "Nasi Goreng", harga: 25000},
    {nama: "Mie Goreng", harga: 22000},
    {nama: "Capcay", harga: 32000}
];
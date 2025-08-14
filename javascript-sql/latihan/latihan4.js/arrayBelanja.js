let sepatu = [
    {nama: "New Balance NB530", harga: 390000},
    {nama: "Nike Vomero", harga: 350000},
    {nama: "Adidas Samba", harga: 180000},
    {nama: "Onitsuka Tiger Mexicco", harga: 420000}
];

let totalBelanja = 0;
console.log("=== Rincian Belanja Sepatu ===");

for (let i = 0; i < sepatu.length; i++) {
  console.log(`${i + 1}. ${sepatu[i].nama} - ${formatRupiah(sepatu[i].harga)}`);
  totalBelanja += sepatu[i].harga;  // Menambahkan harga sepatu ke totalBelanja
}

// Fungsi untuk format harga ke dalam format Rupiah
function formatRupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID');
}

// Menampilkan total belanja
console.log("\nTotal Belanja: " + formatRupiah(totalBelanja));

// Tentukan diskon berdasarkan total harga
let diskonPersen = 0;
if (totalBelanja > 800000) {
  diskonPersen = 15;  // Diskon15% jika total lebih dari 800 ribu
} else if (totalBelanja > 500000) {
  diskonPersen = 10;  // Diskon 10% jika total lebih dari 500 ribu
} else if (totalBelanja > 250000) {
  diskonPersen = 5;  // Diskon 5% jika total lebih dari 250 ribu
} else if (totalBelanja < 250000) {
  diskonPersen = 0;  // Diskon 0% jika total kurang dari 250 ribu
}

// Menampilkan persentase diskon
console.log("\nPersentase Diskon: " + diskonPersen + "%");

// Hitung harga setelah diskon
let jumlahDiskon = totalBelanja * (diskonPersen / 100);
let totalSetelahDiskon = totalBelanja - jumlahDiskon;

// Menampilkan persentase diskon dan total setelah diskon
console.log("\nPersentase Diskon: " + diskonPersen + "%");
console.log("Total Setelah Diskon: " + formatRupiah(totalSetelahDiskon));

// masukan jumlah uang yang dibayar
let uangDibayar = 1200000;

//hitung kembalian
let kembalian = uangDibayar - totalSetelahDiskon;

console.log("Jumlah Uang Dibayar: " + formatRupiah(uangDibayar));
console.log("Kembalian: " + formatRupiah(kembalian));
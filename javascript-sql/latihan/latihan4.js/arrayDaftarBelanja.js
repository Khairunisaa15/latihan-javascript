// 1. Buat array kosong dengan nama daftarBelanja
let daftarBelanja = [];

// 2. Tambahkan tiga barang awal menggunakan .push()
daftarBelanja.push("Beras");
daftarBelanja.push("Minyak");
daftarBelanja.push("Gula");

// 3. Hapus barang "Minyak" menggunakan splice setelah cari index dengan indexOf
let indexMinyak = daftarBelanja.indexOf("Minyak");
if(indexMinyak !== -1) {
    daftarBelanja.splice(indexMinyak, 1);
}

// 4. Tambahkan barang lain supaya contoh output sama (Buah, Sayur, Telur)
daftarBelanja.push("Buah");
daftarBelanja.push("Sayur");
daftarBelanja.push("Telur");

// 5. Urutkan array secara alfabet dengan .sort()
daftarBelanja.sort();

// 6. Tampilkan isi array menggunakan perulangan for dengan format sesuai contoh
console.log("Daftar Belanja Ibu Lily :");
for(let i = 0; i < daftarBelanja.length; i++){
    console.log(`${i+1}. ${daftarBelanja[i]}`);
}

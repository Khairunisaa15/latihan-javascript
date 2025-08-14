let sisiPersegi = 8;
let panjangPersegiPanjang = 9, lebarPersegiPanjang = 3;
let jariLingkaran = 6;
let alasSegitiga = 6, tinggiSegitiga = 4, sisiSegitiga = 6;

//Fungsi Mengitung Luas
function luasPersegi(sisi) {
    return sisi * sisi;
}

function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function luasLingkaran(jarijari) {
    return Math.PI * jarijari * jarijari;
}

function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

//Menghitung Keliling 
function kelilingPersegi(sisi) {
    return 4* sisi;
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

function kelilingLingkaran(jarijari) {
    return 2 * Math.PI * jarijari;
}

function kelilingSegitigaSamaSisi(sisi) {
    return 3 * sisi;
}

//Fungsi untuk mengitung keliling persegi
function hitungKeliling(sisi) {
    return 4 * sisi;
}

//Menampilkan Hasil Luas
    console.log("========== MENGHITUNG LUAS DAN KELILING BANGUN DATAR ==========");
    console.log("\n>> Luas Bangun Datar <<");
    console.log(`Luas Persegi Dengan Sisi ${sisiPersegi} adalah ${luasPersegi(sisiPersegi)}`);
    console.log(`Luas Persegi Panjang Dengan Panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah ${luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
    console.log(`Luas Lingkaran Dengan Jari - Jari ${jariLingkaran} adalah ${luasLingkaran(jariLingkaran).toFixed(2)}`);
    console.log(`Luas Segitiga Dengan Alas ${alasSegitiga} dan tinggi ${tinggiSegitiga} adalah ${luasSegitiga(alasSegitiga, tinggiSegitiga)}`);

//Menampilkan Hasil Keliling
    console.log("\n>> Keliling Bangun Datar <<");
    console.log(`Keliling Persegi Dengan Sisi ${sisiPersegi} adalah ${kelilingPersegi(sisiPersegi)}`);
    console.log(`Keliling Persegi Panjang Dengan Panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah ${kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
    console.log(`Keliling Lingkaran Dengan Jari - Jari ${jariLingkaran} adalah ${kelilingLingkaran(jariLingkaran).toFixed(2)}`);
    console.log(`Keliling Segitiga Dengan Sisi ${sisiSegitiga} adalah ${kelilingSegitigaSamaSisi(sisiSegitiga)}`);
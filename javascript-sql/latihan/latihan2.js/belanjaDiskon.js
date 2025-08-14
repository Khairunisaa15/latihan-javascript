//Harga masing-masing barang elektronik

let headset = 225000;
let mouse = 150000;
let keyboard = 350000;

//Total Harga Belanjaan
let totalBelanja = headset + mouse+ keyboard;

// Diskon Pembelian
let diskonPersen = 0;
if(totalBelanja <250000){
    diskonPersen = 0;
}else if(totalBelanja <=499999){
     diskonPersen = 5;
}else if(totalBelanja <=799999){
     diskonPersen = 10;
}else if(totalBelanja >=800000){
     diskonPersen = 15;
}

// Hitung Diskon
diskon = (diskonPersen / 100) * totalBelanja;

//Hitung Harga Setelah Diskon
let setelahDiskon = totalBelanja- diskon;

////Jumlah pembayaran 
let pembayaran = 800000;

//Hitung kembalian
let kembalian = pembayaran - setelahDiskon;

//Menampilkan Hasil
console.log(`======== Rincian Pembelian ========`);
console.log(`Headset = Rp. ${headset}`);
console.log(`Mouse = Rp. ${mouse}`);
console.log(`Keyboard = Rp. ${keyboard}`);
console.log(`Total Belanja = Rp. ${totalBelanja}`);
console.log(`Diskon =  ${diskonPersen}%`);
console.log(`Total Setelah Diskon = Rp. ${setelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);


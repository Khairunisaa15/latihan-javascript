let angka1 = 10;
let angka2 = 5;
function bagiAngka(a,b) {
    try {
    if(b === 0) {
        throw new Error("Error : tidak bisa membagi dengan nol!");
    }else if(isNaN(a)||isNaN(b)) {
        throw new Error("Error : variabel tidak dikenali!");
    }
    let hasil = a / b;
    console.log("Hasil:", hasil);
}catch (error) {
    console.error("Error:", error.message);
}
}


bagiAngka(angka1, angka2);

console.log("Program selesai.");


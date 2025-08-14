for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    // Kelipatan 3
    if (i % 2 === 0) {
      console.log(`${i} - Mendapat sertifikat`);
    } else {
      console.log(`${i} - Mengikuti uji kompetensi`);
    }
  } else if (i % 2 === 0) {
    console.log(`${i} - Mengikuti pelatihan`);
  } else {
    console.log(`${i} - Apel pagi`);
  }
}

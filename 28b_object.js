let pegawai = {
  nip: "456",
  nama: "Budi Mahmud",
  alamat: {
    jalan: "jl.Ayam No.3",
    kelurahan: "meruya Ilir",
    kecamatan: "Kebon Jeruk",
    kota: "Jakarta Barat",
  },
};

function TotalGaji(jamkerja, gajiperjam) {
  let GajiPokok = jamkerja * gajiperjam;
  console.log("Gaji anda: " + GajiPokok);
}

// pegawai.nama = "Senthod Prawiradigdo";
console.log("Nama: " + pegawai.nama);
console.log("Nip: " + pegawai.nip);
console.log("Alamat{ ");
console.log("Jalan: " + pegawai.alamat.jalan);
console.log("Kelurahan: " + pegawai.alamat.kelurahan);
console.log("Kecamatan: " + pegawai.alamat.kecamatan);
console.log("}");
TotalGaji(7, 2000000);

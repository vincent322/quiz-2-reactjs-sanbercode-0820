let warna = ["biru","merah","kuning","hijau"]

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let Buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

Buku.warnaSampul = [...Buku.warnaSampul, ...warna]

Buku = {...Buku, ...dataBukuTambahan}

console.log(Buku)
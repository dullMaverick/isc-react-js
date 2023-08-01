class Mahasiswa {
    constructor(nama, prodi, tahun) {
        this.nama = nama;
        this.prodi = prodi
        this.tahun = tahun;
    }

    getTahunLulus() {
        const date = new Date()
        const tahun = date.getFullYear()

        return tahun - this.tahun
    }

    getStatusLulus() {
        if(this.getTahunLulus() >= 4) {
            return true
        } return false
    }

    printStatusLulus() {
        if(this.getStatusLulus()) {
            return `Selamat ${this.nama} sudah lulus dari prodi ${this.prodi}`
        } return "Belum lulus"
    }
}

const mahasiswa = new Mahasiswa('fikri', 'informatika', 2019)

console.log(mahasiswa.printStatusLulus())
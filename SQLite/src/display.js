const openDb = require("../index.js");

/**Mengambil dan Menampilkan Data dari Tabel:
Menggunakan perintah SQL untuk mengambil dan menampilkan data dari tabel "Karyawan," "Proyek," dan "Pekerjaan."
 */
async function displayData() {
  try {
    const db = await openDb();
    const karyawanRows = await db.all("SELECT * FROM Karyawan");
    console.log("Data Karyawan:");
    if (karyawanRows.length > 0) {
      console.table(karyawanRows);
    } else {
      console.log("Tidak ada data di tabel Karyawan.");
    }

    const proyekRows = await db.all("SELECT * FROM Proyek");
    console.log("Data Proyek:");
    if (proyekRows.length > 0) {
      console.table(proyekRows);
    } else {
      console.log("Tidak ada data di tabel Proyek.");
    }

    const pekerjaanRows = await db.all("SELECT * FROM Pekerjaan");
    console.log("Data Pekerjaan:");
    if (pekerjaanRows.length > 0) {
      console.table(pekerjaanRows);
    } else {
      console.log("Tidak ada data di tabel Pekerjaan.");
    }
  } catch (error) {
    console.error("Gagal mengambil data:", error.message);
  }
}

// Panggil fungsi displayData untuk menampilkan data dari tabel
displayData();
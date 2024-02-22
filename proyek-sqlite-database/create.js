const db = require('./index')

/*Buat tabel "Karyawan," "Proyek," dan "Pekerjaan" jika belum ada. */
async function createTables() {
    try {
      await db.exec(`
        CREATE TABLE IF NOT EXISTS Karyawan (
          IDKaryawan INTEGER PRIMARY KEY,
          Nama TEXT NOT NULL,
          Usia INTEGER,
          Jabatan TEXT
        );
      `);
  
      await db.exec(`
        CREATE TABLE IF NOT EXISTS Proyek (
          IDProyek INTEGER PRIMARY KEY,
          NamaProyek TEXT NOT NULL,
          IDKaryawanPenanggung INTEGER,
          FOREIGN KEY (IDKaryawanPenanggung) REFERENCES Karyawan (IDKaryawan)
        );
      `);
  
      await db.exec(`
        CREATE TABLE IF NOT EXISTS Pekerjaan (
          IDPekerjaan INTEGER PRIMARY KEY,
          NamaPekerjaan TEXT NOT NULL,
          IDProyek INTEGER,
          IDKaryawan INTEGER,
          FOREIGN KEY (IDProyek) REFERENCES Proyek (IDProyek),
          FOREIGN KEY (IDKaryawan) REFERENCES Karyawan (IDKaryawan)
        );
      `);
  
      console.log('Tabel berhasil dibuat.');
    } catch (error) {
      console.error('Gagal membuat tabel:', error.message);
    }
  }
  
  // Panggil fungsi createTables untuk membuat tabel
  createTables();

  module.exports = createTables
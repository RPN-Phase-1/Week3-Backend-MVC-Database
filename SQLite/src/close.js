const openDB = require('../index.js')

/**Menutup Koneksi ke Database SQLite:
Menutup koneksi ke database SQLite setelah selesai. */
async function closeDatabase() {
    try {
      const db = await openDB()
      await db.close();
      console.log('Koneksi ke database ditutup.');
    } catch (error) {
      console.error('Gagal menutup koneksi:', error.message);
    }
  }

  // Panggil fungsi closeDatabase untuk menutup koneksi ke database
  closeDatabase();
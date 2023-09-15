let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database('./address_book.db');


async function createTables() {
    try {
      await db.exec(`
        CREATE TABLE IF NOT EXISTS contact (
          id INTEGER PRIMARY KEY,
          name TEXT,
          phoneNumber TEXT UNIQUE,
          company TEXT,
          email TEXT UNIQUE
        );
      `);
  
      await db.exec(`
        CREATE TABLE IF NOT EXISTS GroupContact (
          id INTEGER PRIMARY KEY,
          ContactId INTEGER,
          GroupId INTEGER,
          FOREIGN KEY (ContactId) REFERENCES contact (id)
          FOREIGN KEY (GroupId) REFERENCES contact (Groups)
        );
      `);
  
      await db.exec(`
        CREATE TABLE IF NOT EXISTS Groups (
         id INTEGER PRIMARY KEY,
         groupName TEXT
        );
      `);
  
      console.log('Tabel berhasil dibuat.');
    } catch (error) {
      console.error('Gagal membuat tabel:', error.message);
    }
  }
  
  // Panggil fungsi createTables untuk membuat tabel
module.exports = db;
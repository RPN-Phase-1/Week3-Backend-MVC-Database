let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./address_book.db");

async function createTables() {
  try {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS Contact (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        phoneNumber INTEGER UNIQUE,
        company TEXT,
        email TEXT UNIQUE
      );
    `);

    await db.exec(`
      CREATE TABLE IF NOT EXISTS GroupContact (
        id INTEGER PRIMARY KEY,
        ContactId INTEGER,
        GroupId INTEGER,
        FOREIGN KEY (ContactId) REFERENCES Contact (id)
        FOREIGN KEY (GroupId) REFERENCES Groups (id)
      );
    `);

    await db.exec(`
      CREATE TABLE IF NOT EXISTS Groups (
        id INTEGER PRIMARY KEY,
        groupName TEXT
      );
    `);
  } catch (error) {
    console.error("Gagal membuat tabel:", error.message);
  }
}

// Panggil fungsi createTables untuk membuat tabel
// createTables()

module.exports = db;

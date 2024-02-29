let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("../address_book.db");

async function createTables() {
  try {
    await db.exec(`
          CREATE TABLE IF NOT EXISTS contact(
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          phoneNumber INTEGER NOT NULL UNIQUE,
          company TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE
          )`);

    await db.exec(`
          CREATE TABLE IF NOT EXISTS contactGroup(
          id INTEGER PRIMARY KEY,
          contactId INTEGER NOT NULL,
          groupId INTEGER NOT NULL,
          FOREIGN KEY (ContactId) REFERENCES Contact (IDContact)
          FOREIGN KEY (GroupId) REFERENCES Contact (IDContact)        
          )`);

    await db.exec(`
          CREATE TABLE IF NOT EXISTS groups(
          id INTEGER PRIMARY KEY,
          groupName TEXT NOT NULL
          )`);

    // console.log('Table berhasil di buat')
  } catch (err) {
    console.log(err);
  }
}

createTables();

module.exports = db;

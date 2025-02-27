let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./address_book.db");

async function createTables() {
  try {
    await db.exec(`
          CREATE TABLE IF NOT EXISTS Contact(
          ID INTEGER PRIMARY KEY,
          Name TEXT NOT NULL,
          PhoneNumber INTEGER NOT NULL UNIQUE,
          Company TEXT NOT NULL,
          Email TEXT NOT NULL UNIQUE
          )`);

    await db.exec(`
          CREATE TABLE IF NOT EXISTS GroupContact(
          ID INTEGER PRIMARY KEY,
          ContactId INTEGER NOT NULL,
          GroupId INTEGER NOT NULL,
          FOREIGN KEY (ContactId) REFERENCES Contact (IDContact)
          FOREIGN KEY (GroupId) REFERENCES Contact (IDContact)        
          )`);

    await db.exec(`
          CREATE TABLE IF NOT EXISTS Groups(
          ID INTEGER PRIMARY KEY,
          GroupName TEXT NOT NULL
          )`);

    // console.log('Table berhasil di buat')
  } catch (err) {
    console.log(err);
  }
}

createTables();

module.exports = db;

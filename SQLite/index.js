const sqlite = require("sqlite")
const sqlite3 = require('sqlite3').verbose();

async function openDb() {
    return sqlite.open({
        filename: './database_karyawan.db',
        driver: sqlite3.Database
    });
}

module.exports = openDb;
import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./data/address_book.db");

export { db }
let db = require("../connection");

class Contact {
    static create(name, phoneNumber, company, email) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Contact (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)`,
                [name, phoneNumber, company, email],
                function (err) {
                    if (err) reject(err);
                    else resolve(this.lastID);
                });
        });
    }

    static update(id, name, phoneNumber, company, email) {
        return new Promise((resolve, reject) => {
            db.run(`UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
                [name, phoneNumber, company, email, id],
                function (err) {
                    if (err) reject(err);
                    else resolve();
                });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM Contact WHERE id = ?`, [id], function (err) {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM Contact", [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }
}

module.exports = Contact;

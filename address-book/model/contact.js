const db = require("../connection");

class Contact {
    static async create(name, phoneNumber, company, email, cb) {
        try {
            await db.run(
                "INSERT INTO Contact (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)",
                [name, phoneNumber, company, email]
            );

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async update(id, name, phoneNumber, company, email, cb) {
        try {
            await db.run(
                "UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?",
                [name, phoneNumber, company, email, id]
            );

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async delete(id, cb) {
        try {
            await db.run("DELETE FROM Contact WHERE id = ?", [id]);

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async show(cb) {
        try {
            await db.all("SELECT * FROM Contact", [], (err, rows) => {
                if (err) throw new Error(err);

                cb(null, rows);
            });
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }
}

module.exports = Contact;

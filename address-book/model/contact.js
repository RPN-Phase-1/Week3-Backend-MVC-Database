const db = require("../connection");

class Contact {
    static async addContact(name, phoneNumber, company, email, cb) {
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

    static async updateContact(id, name, phoneNumber, company, email, cb) {
        try {
            await db.run(
                "UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?",
                [name, phoneNumber, company, email, id]
            )

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async deleteContact(id, cb) {
        try {
            await db.run(
                "DELETE FROM Contact WHERE id = ?",
                [id]
            )

            cb(null);
        } catch (error) {
            cb(error)
        } finally {
            await db.close();
        }
    }
}

module.exports = Contact;

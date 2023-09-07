const db = require("../connection");

class Groups {
    static async create(name, cb) {
        try {
            await db.run("INSERT INTO Groups (groupName) VALUES (?)", [name]);

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async update(id, name, cb) {
        try {
            await db.run("UPDATE Groups SET groupName = ? WHERE id = ?", [name, id]);

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async delete(id, cb) {
        try {
            await db.run("DELETE FROM Groups WHERE id = ?", [id]);

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async show(cb) {
        try {
            await db.all("SELECT * FROM Groups", [], (err, rows) => {
                if (err) throw new Error(err)

                cb(null, rows);
            });
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }
}

module.exports = Groups
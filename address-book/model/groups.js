const db = require("../connection");

class Groups {
    static async createGroups(name, cb) {
        try {
            await db.run("INSERT INTO Groups (groupName) VALUES (?)", [name]);

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async updateGroups(id, name, cb) {
        try {
            await db.run("UPDATE Groups SET groupName = ? WHERE id = ?", [name, id]);

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async deleteGroups(id, cb) {
        try {
            await db.run("DELETE FROM Groups WHERE id = ?", [id]);

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async showGroups(cb) {
        try {
            const data = await db.all("SELECT * FROM Groups", []);

            cb(null, data);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }
}

module.exports = Groups
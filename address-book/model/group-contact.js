const db = require("../connection");

class GroupContact {
    static async createGroupContact(contactId, groupId, cb) {
        try {
            await db.run(
                "INSERT INTO GroupContact (contactId, groupId) VALUES (?, ?)",
                [contactId, groupId]
            );

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async updateGroupContact(id, contactId, groupId, cb) {
        try {
            await db.run(
                "UPDATE GroupContact SET contactId = ?, groupId = ? WHERE id = ?",
                [contactId, groupId, id]
            );

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }

    static async deleteGroupContact(id, cb) {
        try {
            await db.run("DELETE FROM GroupContact WHERE id = ?", [id]);

            cb(null);
        } catch (error) {
            cb(error);
        } finally {
            await db.close();
        }
    }
}

module.exports = GroupContact;

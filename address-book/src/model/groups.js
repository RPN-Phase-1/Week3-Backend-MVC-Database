const openDb = require("../connection/connection");

class Groups {
  constructor(groupName) {
    this.groupName = groupName;
  }

  static async create(groupName) {
    const db = await openDb();
    try {
      const create = new Groups(groupName);
      const query = `INSERT INTO Groups VALUES (null, ?)`;
      await db.run(query, [create.groupName]);
      return create;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }

  static async update(id, groupName) {
    const db = await openDb();
    try {
      const update = new Groups(groupName);
      const query = `UPDATE Groups SET groupName = ? WHERE id = ?`;
      await db.run(query, [update.groupName, id]);
      return update;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }

  static async deleteByGroupId(groupId) {
    const db = await openDb();
    try {
      const query = `DELETE FROM GroupContact WHERE GroupId = ?`;
      await db.run(query, [groupId]);
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }

  static async delete(id) {
    const db = await openDb();
    try {
      const query = `DELETE FROM Groups WHERE id = ?`;
      await db.run(query, id);
    } catch (err) {
      console.log(err);
    }
  }

  static async showWithContacts() {
    const db = await openDb();
    try {
      const show = await db.all(
        `SELECT Groups.*, Contact.* FROM Groups 
         LEFT JOIN GroupContact ON Groups.id = GroupContact.GroupId 
         LEFT JOIN Contact ON GroupContact.ContactId = Contact.id`
      );
      return show;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }
}

module.exports = Groups;

const { promises } = require("dns");
let db = require("../connection");
const Contact = require("./contact");

class GroupContact {
  constructor(contactId, groupId) {
   this.contactId = contactId,
   this.groupId = groupId
  }

  static createContactGroups(contactId, groupId) {
    let newContactGroups = new GroupContact(contactId,groupId);
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO GroupContact VALUES (null, ?, ?)`,
        [
          newContactGroups.contactId,
          newContactGroups.groupId
        ],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static updateContactGroups(id, ContactId, GroupId) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE id = ?`,
        [ContactId, GroupId, id],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static deleteContactGroups(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = GroupContact;

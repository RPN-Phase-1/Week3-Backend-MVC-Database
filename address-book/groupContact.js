let db = require("./connection");

class GroupContact {
  constructor(contactId, groupId) {
    this.contactId = contactId;
    this.groupId = groupId;
  }

  static create(contactId, groupId) {
    let newGroupContact = new GroupContact(contactId, groupId);
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO GroupContact VALUES (null, ?, ?)`,
        [newGroupContact.contactId, newGroupContact.groupId],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        })
    })
  }

  static update(id, contactId, groupId) {
    let newGroupContact = new GroupContact(contactId, groupId);
    return new Promise((resolve, reject) => {
      db.run(`UPDATE GroupContact SET contactId = ?, groupId = ? WHERE id = ?`,
        [newGroupContact.contactId, newGroupContact.groupId, id],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        })
    })
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM GroupContact WHERE id = ?`, id,
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        })
    })
  }

  static show() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM GroupContact`,(err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      })
    })
  }
}

module.exports = GroupContact;
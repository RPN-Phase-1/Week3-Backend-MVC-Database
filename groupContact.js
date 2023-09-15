let db = require("./connection");

class GroupContact {
  constructor(contactId, groupId) {
    this.contactId = contactId;
    this.groupId = groupId;
  }

  static create(name, phoneNumber, company, email) {
    let newGroupContact = new GroupContact(name, phoneNumber, company, email);
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO GroupContact VALUES (null, ?, ?, ?, ?)`,
        [newGroupContact.name, newGroupContact.phoneNumber, newGroupContact.company, newGroupContact.email],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        })
    })
  }

  static update(id, name, phoneNumber, company, email) {
    let newGroupContact = new GroupContact(name, phoneNumber, company, email);
    return new Promise((resolve, reject) => {
      db.run(`UPDATE GroupContact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
        [newGroupContact.name, newGroupContact.phoneNumber, newGroupContact.company, newGroupContact.email, id],
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
let db = require("./connection");

class Groups {
  constructor(groupName) {
    this.groupName = groupName;
  }

  static create(name, phoneNumber, company, email) {
    let newGroups = new Groups(name, phoneNumber, company, email);
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO Groups VALUES (null, ?, ?, ?, ?)`,
        [newGroups.name, newGroups.phoneNumber, newGroups.company, newGroups.email],
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
    let newGroups = new Groups(name, phoneNumber, company, email);
    return new Promise((resolve, reject) => {
      db.run(`UPDATE Groups SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
        [newGroups.name, newGroups.phoneNumber, newGroups.company, newGroups.email, id],
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
      db.run(`DELETE FROM Groups WHERE id = ?`, id,
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
      db.all(`SELECT * FROM Groups`,(err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      })
    })
  }
}

module.exports = Groups;
const { ERROR } = require("sqlite3");
let db = require("../connection");
const { errorView } = require("../view/view");

class GroupContact {
  constructor(contactId, groupId) {
    (this.contactId = contactId), (this.groupId = groupId);
  }

  static createGroupContact(contactId, groupId) {
    let sql = `SELECT * FROM GroupContact ORDER BY ID DESC`;
    return new Promise((succes, failid) => {
      db.run(
        `
            INSERT INTO GroupContact VALUES (null, ?, ?)`,
        [contactId, groupId],
        (err) => {
          if (err) {
            failid(err);
            return;
          }

          db.get(sql, (err, result) => {
            if (err) {
              failid(err);
              return;
            }

            if (!result) {
              failid(new Error("Invalid Data in GroupContact"));
              return;
            }

            succes(result);
          });
        }
      );
    });
  }

  static updateGroupContact(ID, contactId, groupId) {
    let sql = `SELECT * FROM GroupContact WHERE ID = ?`;
    let data = ID;
    return new Promise((succes, failid) => {
      db.run(
        `UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE ID = ?`,
        [contactId, groupId, ID],
        (err) => {
          if (err) {
            failid(err);
            return;
          }

          db.get(sql, [data], (err, result) => {
            if (err) {
              failid(err);
              return;
            }

            if (!result) {
              failid(new Error("Data is Not Found"));
              return;
            }

            succes(result);
          });
        }
      );
    });
  }

  static deleteGroupContact(ID) {
    let sql = `SELECT * FROM GroupContact WHERE ID = ?`;
    let data = ID;
    return new Promise((succes, failid) => {
      db.get(sql, [data], (err, result) => {
        if (err) {
          failid(err);
          return;
        }

        if (!result) {
          failid(new Error("Data is Not Found"));
          return;
        }

        db.run(`DELETE FROM GroupContact WHERE ID = ?`, [ID], (err) => {
          if (err) {
            failid(err);
            return;
          }

          succes(result);
        });
      });
    });
  }
}

module.exports = GroupContact;

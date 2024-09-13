let db = require("../connection");
const { errorView } = require("../view/view");
// let validator = require("validator");

class Groups {
  constructor(groupName) {
    this.groupName = groupName;
  }

  static createGroup(groupName) {
    let sql = `SELECT * FROM Groups ORDER BY ID DESC`;
    return new Promise((succes, failid) => {
      db.run(`INSERT INTO Groups VALUES (null, ?)`, [groupName], (err) => {
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
            failid(new Error("Data is Not Found"));
            return;
          }

          succes(result);
        });
      });
    });
  }

  static updateGroup(ID, groupName) {
    let sql = `SELECT * FROM Groups WHERE ID = ?`;
    let data = ID;
    return new Promise((succes, failid) => {
      db.run(
        `UPDATE Groups SET ID= ?, GroupName = ?`,
        [ID, groupName],
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
            }

            succes(result);
          });
        }
      );
    });
  }

  static deleteGroup(ID) {
    let sql = `SELECT * FROM Groups WHERE ID = ?`;
    let data = ID;
    return new Promise((succes, failid) => {
      db.get(sql, [data], (err, result) => {
        if (err) {
          failid(err);
          return;
        }

        if (!result) {
          failid(new Error(`Data ${ID} Not Found`));
          return;
        }

        db.run(`DELETE FROM Groups WHERE ID = ?`, [ID], (err) => {
          if (err) {
            failid(err);
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
    });
  }

  static showGroup() {
    let sql = `SELECT * FROM Groups INNER JOIN Contact ON Groups.ID = Contact.ID 
        INNER JOIN GroupContact ON Groups.ID = GroupContact.GroupId`;
    return new Promise((succes, failed) => {
      db.all(sql, (err, result) => {
        if (err) {
          failed(err);
          return;
        }

        if (!result) {
          failed(new Error("Data is Not Found"));
          return;
        }

        succes(result);
      });
    });
  }
}

module.exports = Groups;

let db = require("../connection");
let validator = require("validator");
const { errorView } = require("../view/view");

class Contact {
  constructor(name, phoneNumber, company, email) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.company = company;
    this.email = email;
  }

  static createContact(name, phoneNumber, company, email) {
    let cekEmail = validator.isEmail(email);
    let cekPhone = validator.isMobilePhone(phoneNumber, "id-ID");
    let sql = `SELECT * FROM Contact WHERE Email = ?`;
    let data = email;
    return new Promise((succes, failid) => {
      if (!cekEmail) {
        console.log("Masukan Email Yang Benar!");
        failid(new Error("invalid Email"));
        return;
      }

      if (!cekPhone) {
        console.log("Anda harus menggunakan nomer dinegara indonesia");
        failid(new Error("invalid Number"));
        return;
      }

      db.run(
        `INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`,
        [name, phoneNumber, company, email],
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

  static updateContact(ID, name, phoneNumber, company, email) {
    let cekEmail = validator.isEmail(email);
    let cekPhone = validator.isMobilePhone(phoneNumber, "id-ID");
    let sql = `SELECT * FROM Contact WHERE ID = ?`;
    let data = ID;
    return new Promise((succes, failid) => {
      if (!cekEmail) {
        console.log("Masukan Email Yang Benar!");
        failid(new Error("invalid Email"));
        return;
      }

      if (!cekPhone) {
        console.log("Anda harus menggunakan nomer dinegara indonesia");
        failid(new Error("invalid Number"));
        return;
      }

      db.run(
        `UPDATE Contact 
                    SET Name = ?, PhoneNumber = ?, Company = ?, Email = ? 
                    WHERE ID = ?`,
        [name, phoneNumber, company, email, ID],
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

  static deleteContact(ID) {
    let sql = `SELECT * FROM Contact WHERE ID = ?`;
    let data = ID;
    return new Promise((succes, failid) => {
      db.get(sql, [data], (err, result) => {
        if (err) {
          failid(err);
          return;
        }

        if (!result) {
          failid(new Error("Data is not found"));
          return;
        }

        db.run(`DELETE FROM Contact WHERE ID = ?`, [ID], (err) => {
          if (err) {
            failid(err);
            return;
          }

          succes(result);
        });
      });
    });
  }

  static showContact() {
    let sql = `SELECT * FROM Contact INNER JOIN GroupContact ON Contact.ID = GroupContact.ContactId
    INNER JOIN Groups ON GroupContact.GroupId = Groups.ID`;
    return new Promise((succes, failid) => {
      db.all(sql, (err, result) => {
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
  }
}

module.exports = Contact;

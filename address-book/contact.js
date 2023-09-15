let db = require("./connection");

class Contact {
  constructor(name, phoneNumber, company, email) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.company = company;
    this.email = email;
  }

  static create(name, phoneNumber, company, email) {
    let newContact = new Contact(name, phoneNumber, company, email);
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`,
        [newContact.name, newContact.phoneNumber, newContact.company, newContact.email],
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
      db.get(`SELECT * FROM CONTACT`,(err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      })
    })
  }
}

module.exports = Contact;
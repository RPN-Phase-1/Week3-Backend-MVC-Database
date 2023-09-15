const { promises } = require("dns");
let db = require("../connection");
const { resolve } = require("path");

const createContact = (name, phoneNumber, company, email) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO contact VALUES (null, ?, ?, ?, ?)`,
      [name, phoneNumber, company, email],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

const updateContact = (name, phoneNumber, company, email, id) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
      [name, phoneNumber, company, email, id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

const deleteContact = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM contact WHERE id = ?`, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const getContact = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM contact INNER JOIN GroupContact ON contact.id = GroupContact.ContactId`,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};

module.exports = {createContact, updateContact, deleteContact, getContact};

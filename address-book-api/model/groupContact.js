const { promises } = require("dns");
let db = require("../connection");
const Contact = require("./contact");

const createContactGroups = (contactId, groupId) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO GroupContact VALUES (null, ?, ?)`,
      [contactId, groupId],
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

const updateContactGroups = (id, ContactId, GroupId) => {
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
};

const deleteContactGroups = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {createContactGroups, updateContactGroups, deleteContactGroups};

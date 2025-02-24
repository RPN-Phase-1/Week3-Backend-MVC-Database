const { resolve } = require("path");
let Contact = require("../model/contact");
let View = require("../view/view");

class contactController {
  static createContact(name, phoneNumber, company, email) {
    Contact.create(name, phoneNumber, company, email)
      .then(() => {
        View.viewCreateContact();
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

  static updateContact(id, name, phoneNumber, company, email) {
    Contact.updateContact(id, name, phoneNumber, company, email)
      .then(() => {
        View.viewUpdateContact();
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

  static deleteContact(id) {
    Contact.deleteContact(id)
      .then(() => {
        View.viewDeleteContact();
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

  static showContact() {
    Contact.showContact()
      .then((data) => {
        View.viewShowContact(data);
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

  static help() {
    View.viewHelp();
  }
}

module.exports = contactController;

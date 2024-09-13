// let db = require("../connection");
let ModelContact = require("../model/contact-model");
let AddressBookView = require("../view/view");

class AddressBookController {
  static async createContact(name, phoneNumber, company, email) {
    try {
      const countContact = await ModelContact.createContact(
        name,
        phoneNumber,
        company,
        email
      );

      AddressBookView.createView(countContact);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }

  static async updateContact(ID, name, phoneNumber, company, email) {
    try {
      const countContact = await ModelContact.updateContact(
        ID,
        name,
        phoneNumber,
        company,
        email
      );

      AddressBookView.updateView(countContact);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }

  static async deleteContact(ID) {
    try {
      const countContact = await ModelContact.deleteContact(ID);

      AddressBookView.deleteView(countContact);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }

  static async showContact() {
    try {
      const countContact = await ModelContact.showContact();

      AddressBookView.showContactView(countContact);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }
}

module.exports = AddressBookController;

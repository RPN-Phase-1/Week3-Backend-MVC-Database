let ModelGroupContact = require("../model/groupContact-model");
let AddressBookView = require("../view/view");

class AddressBookControllerGroupContact {
  static async createGroupContact(contactId, groupId) {
    try {
      const countGroupContact = await ModelGroupContact.createGroupContact(
        contactId,
        groupId
      );

      AddressBookView.createGroupContactView(countGroupContact);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }

  static async updateGroupContact(ID, contactId, groupId) {
    try {
      const countGroupContact = await ModelGroupContact.updateGroupContact(
        ID,
        contactId,
        groupId
      );

      AddressBookView.updateGroupContactView(countGroupContact);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }

  static async deleteGroupContact(ID) {
    try {
      const countGroupContact = await ModelGroupContact.deleteGroupContact(ID);

      AddressBookView.deleteGroupContact(countGroupContact);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }
}

module.exports = AddressBookControllerGroupContact;

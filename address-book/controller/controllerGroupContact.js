const { resolve } = require("path");
let GroupContact = require("../model/groupContact");
let View = require("../view/view");
const { group } = require("console");

class contactController {
  static createContactGroups(contactId, groupId) {
    GroupContact.createContactGroups(contactId,groupId)
      .then(() => {
        View.viewCreateGroupContact();
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

  static updateContactGroups(id, contactId, groupId) {
    GroupContact.updateContactGroups(id, contactId,groupId)
      .then(() => {
        View.viewUpdateGroupContact();
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

  static deleteContactGroups(id) {
    GroupContact.deleteContactGroups(id)
      .then(() => {
        View.viewDeleteGroupsContact();
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

//   static showContact() {
//     Contact.showContact()
//       .then((data) => {
//         View.viewShowContact(data);
//       })
//       .catch((err) => {
//         View.ErrorView(err);
//       });
//   }

//   static help() {
//     View.viewHelp();
//   }
}

module.exports = contactController;

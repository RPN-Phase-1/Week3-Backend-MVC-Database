let GroupContact = require("./groupContact");
let AddressBookView = require("./view");

class GroupContactController {
  static help() {
    AddressBookView.helpView()
  }

  static create(values) {
    const [ contactId, groupId ] = values; 
    GroupContact.create(contactId, groupId).then(() => {
      AddressBookView.createView('GroupContact');
    }).catch(err=> {
      AddressBookView.ErrorView(err);
    })
  }

  static update(values) {
    const [id, contactId, groupId] = values;
    GroupContact.update(id, contactId, groupId).then(() => {
      AddressBookView.updateView('GroupContact');
    }).catch(err=> {
      AddressBookView.ErrorView(err);
    })
  }

  static delete(id) {
    GroupContact.delete(id).then(() => {
      AddressBookView.deleteView('GroupContact');
    }).catch(err=> {
      AddressBookView.ErrorView(err);
    })
  }

  static show() {
    GroupContact.show().then((rows) => {
      console.log(rows)
    }).catch(err => {
      console.log(err)
    })
  }
}


module.exports = GroupContactController;
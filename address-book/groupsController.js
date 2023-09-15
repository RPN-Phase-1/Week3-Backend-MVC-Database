let Groups = require("./groups");
let AddressBookView = require("./view");

class GroupsController {
  static help() {
    AddressBookView.helpView()
  }

  static create(values) {
    const [ groupName ] = values; 
    Groups.create(groupName).then(() => {
      AddressBookView.createView('Groups');
    }).catch(err=> {
      AddressBookView.ErrorView(err);
    })
  }

  static update(values) {
    const [id, groupName] = values;
    Groups.update(id, groupName).then(() => {
      AddressBookView.updateView('Groups');
    }).catch(err=> {
      AddressBookView.ErrorView(err);
    })
  }

  static delete(id) {
    Groups.delete(id).then(() => {
      AddressBookView.deleteView('Groups');
    }).catch(err=> {
      AddressBookView.ErrorView(err);
    })
  }

  static show() {
    Groups.show().then((rows) => {
      console.log(rows)
    }).catch(err => {
      console.log(err)
    })
  }
}


module.exports = GroupsController;
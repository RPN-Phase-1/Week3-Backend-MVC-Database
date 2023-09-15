let Contact = require("./contact");
let AddressBookView = require("./view");

class AddressBookController {
  static help() {
    AddressBookView.helpView()
  }

  static create(values) {
    const [name, phoneNumber, company, email] = values;
    Contact.create(name, phoneNumber, company, email).then(() => {
      AddressBookView.createView('contact');
    }).catch(err=> {
      AddressBookView.ErrorView(err);
    })
  }

  static update(values) {
    const [id, name, phoneNumber, company, email] = values;
    Contact.update(id, name, phoneNumber, company, email).then(() => {
      AddressBookView.updateView('contact');
    }).catch(err=> {
      AddressBookView.ErrorView(err);
    })
  }

  static delete(id) {
    Contact.delete(id).then(() => {
      AddressBookView.deleteView('contact');
    }).catch(err=> {
      AddressBookView.ErrorView(err);
    })
  }

  static show() {
    Contact.show().then((rows) => {
      console.log(rows)
    }).catch(err => {
      console.log(err)
    })
  }
}


module.exports = AddressBookController;
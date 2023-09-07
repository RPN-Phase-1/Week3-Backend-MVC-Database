const Contact = require("../model/contact");
const AddressBookView = require("../view");

class ContactController {
    static addContact(name, phoneNumber, company, email) {
        Contact.addContact(name, phoneNumber, company, email, (err) => {
            if (err) return AddressBookView.errorView(err);
            
            AddressBookView.addContactView();
        })
    }

    static updateContact(id, name, phoneNumber, company, email) {
        Contact.updateContact(id, name, phoneNumber, company, email, (err) => {
            if (err) return AddressBookView.errorView(err);
            
            AddressBookView.updateContactView();
        })
    }

    static deleteContact(id) {
        Contact.deleteContact(id, (err) => {
            if (err) return AddressBookView.errorView(err);
            
            AddressBookView.deleteContactView();
        })
    }

    static showContact() {
        Contact.showContact((err, data) => {
            if (err) return AddressBookView.errorView(err);
            
            AddressBookView.showContactView(data);
        })
    }
}

module.exports = ContactController;
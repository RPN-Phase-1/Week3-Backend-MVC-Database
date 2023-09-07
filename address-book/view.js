class AddressBookView {
    static errorView(msg) {
        console.log(msg);
    }

    static addContactView() {
        console.log("Contact data added successfully");
    }

    static updateContactView() {
        console.log("Contact updated successfully");
    }

    static deleteContactView() {
        console.log("Contact deleted successfully")
    }

    static showContactView(data) {
        console.log(data);
    }
}

module.exports = AddressBookView;
const GroupContact = require('../model/group-contact');
const AddressBookView = require("../view")

class GroupContactController {
    static createGroupContact(contactId, groupId){
        GroupContact.createGroupContact(contactId, groupId, (err) => {
            if (err) return AddressBookView.errorView(err);

            AddressBookView.addGroupContactView();
        })
    }

    static updateGroupContact(id, contactId, groupId){
        GroupContact.updateGroupContact(id, contactId, groupId, (err) => {
            if (err) return AddressBookView.errorView(err);

            AddressBookView.updateGroupContactView();
        })
    }

    static deleteGroupContact(id){
        GroupContact.deleteGroupContact(id, (err) => {
            if (err) return AddressBookView.errorView(err);

            AddressBookView.deleteGroupsView();
        })
    }
}

module.exports = GroupContactController;
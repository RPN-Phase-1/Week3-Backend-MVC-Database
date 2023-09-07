const Groups = require("../model/groups");
const AddressBookView = require("../view");

class GroupsController {
    static addGroups(name) {
        Groups.createGroups(name, (err) => {
            if (err) AddressBookView.errorView(err);

            AddressBookView.addGroupsView();
        });
    }

    static updateGroups(id, name) {
        Groups.updateGroups(id, name, (err) => {
            if (err) AddressBookView.errorView(err);

            AddressBookView.updateGroupsView();
        });
    }

    static deleteGroups(id) {
        Groups.deleteGroups(id, (err) => {
            if (err) AddressBookView.errorView(err);

            AddressBookView.deleteGroupsView();
        });
    }

    static showGroups() {
        Groups.showGroups((err, data) => {
            if (err) AddressBookView.errorView(err);

            AddressBookView.showGroupsView(data);
        });
    }
}

module.exports = GroupsController;

let ModelGroups = require("../model/group-model");
let AddressBookView = require("../view/view");

class AddressBookControllerGroups {
  static async createGroups(groupName) {
    try {
      const countGroups = await ModelGroups.createGroup(groupName);

      AddressBookView.createGroupsView(countGroups);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }

  static async updateGroups(ID, groupName) {
    try {
      const countGroups = await ModelGroups.updateGroup(ID, groupName);

      AddressBookView.updateGroupsView(countGroups);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }

  static async deleteGroups(ID, IDGroupContact) {
    try {
      const countGroups = await ModelGroups.deleteGroup(ID, IDGroupContact);

      AddressBookView.deleteGroupsView(countGroups);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }

  static async showGroups() {
    try {
      const countGroups = await ModelGroups.showGroup();

      AddressBookView.showGroupsView(countGroups);
    } catch (err) {
      AddressBookView.errorView(err);
      console.log(err.message);
    }
  }
}

module.exports = AddressBookControllerGroups;

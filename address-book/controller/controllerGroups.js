const { resolve } = require("path");
let Groups = require("../model/groups");
let View = require("../view/view");

class ControllerGroups {
  static createGroup(groupName) {
    Groups.createGroups(groupName)
      .then(() => {
        View.createGroups();
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

  static updateGroups(id, groupName) {
    Groups.updateGroups(id, groupName)
      .then(() => {
        View.updateGroups();
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

  static deleteGroups(id) {
    Groups.deleteGroups(id)
      .then(() => {
        View.deleteGroups();
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }

  static showGroups() {
    Groups.showGroups()
      .then((data) => {
        View.showGroups(data);
      })
      .catch((err) => {
        View.ErrorView(err);
      });
  }
}

  

module.exports = ControllerGroups;

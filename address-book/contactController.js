// let Patient = require("./patient");
// let Employee = require("./employee")
let AddressBookView = require("./view");

class AddressBookController {
  static help() {
    AddressBookView.helpView()
  }
}


module.exports = AddressBookController;
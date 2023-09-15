class AddressBookView {
  static createView() {
      console.log(`save data success`)
  }

  static updateView() {
    console.log(`update data success`)
  }

  static deleteView() {
    console.log(`delete data success`)
  }

  static ErrorView(message) {
    console.log(`terjadi kesalahan ${message}`)
  }

  static helpView() {
    console.log(`
    ====================
    ADDRESS BOOK COMMAND
    ====================
    
    > node main.js create Contact <name> <phoneNumber> <company> <email>
    > node main.js update Contact <id> <name> <phoneNumber> <company> <email>
    > node main.js delete Contact <id>
    > node main.js showContact
    > node main.js create Groups <groupName>
    > node main.js update Groups <id> <groupName>
    > node main.js delete Groups <id>
    > node main.js showGroups
    > node main.js create ContactGroups <contactId> <groupId>
    > node main.js update ContactGroups <id> <contactId> <groupId>
    > node main.js delete ContactGroups <id> 
    > node main.js help`)
  }
}


module.exports = AddressBookView;
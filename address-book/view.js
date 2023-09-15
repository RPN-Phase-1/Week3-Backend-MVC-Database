class AddressBookView {
  static createView(table) {
      console.log(`save data  ${table} success`)
  }

  static updateView(table) {
    console.log(`update data  ${table} success`)
  }

  static deleteView(table) {
    console.log(`delete data ${table} success`)
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
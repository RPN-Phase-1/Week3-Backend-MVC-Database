class View {
  static async createContactView(create) {
    console.log("create contact sukses", create);
  }

  static async updateContactView(update) {
    console.log(`update contact sukses`, update)
  }

  static async deleteContactView(id) {
    console.log(`Contact dengan id ${id} berhasil di hapus`)
  }

  static async showContact(showContact) {
    console.log("Data kontak")
    console.table(showContact)
  }

  static async createContactGroupView(create) {
    console.log("create succes", create)
  }

  static async updateContactGroupView(update) {
    console.log("update succes", update)
  }

  static async deleteContactGroupView() {
    console.log("delete contactGroups succes")
  }

  static async createGroupsView(create) {
    console.log("create groups succes", create)
  }

  static async updateGroupsView(update) {
    console.log("update succes", update)
  }

  static async deleteGroupsView() {
    console.log("delete succes")
  }

  static async showGroupsView(show) {
    console.log("data groups")
    console.table(show)
  }

  static errorView(err) {
    console.log(`Error : ${err}`);
  }
  static helpView() {
    console.log(`
    ====================
    ADDRESS BOOK COMMAND
    ====================
    
    > node main.js createContact <name> <phoneNumber> <company> <email>
    > node main.js updateContact <id> <name> <phoneNumber> <company> <email>
    > node main.js deleteContact <id>
    > node main.js showContact
    > node main.js createGroups <groupName>
    > node main.js updateGroups <id> <groupName>
    > node main.js deleteGroups <id>
    > node main.js showGroups
    > node main.js createContactGroups <contactId> <groupId>
    > node main.js updateContactGroups <id> <contactId> <groupId>
    > node main.js deleteContactGroups <id> 
    > node main.js help
    `);
  }
}

module.exports = View;

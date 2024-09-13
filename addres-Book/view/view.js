class AddressBookView {
  static createView(countContact) {
    console.log(`Table Berhasil di Buat`);
    console.table(countContact);
  }

  static updateView(countContact) {
    console.log("Table Berhasil di Update");
    console.table(countContact);
  }

  static deleteView(countContact) {
    console.log("Data ini Behasil di Hapus");
    console.table(countContact);
  }

  static showContactView(countContact) {
    console.log("Data Berhasil di Tampilkan");
    console.table(countContact);
  }

  static createGroupContactView(countGroupContact) {
    console.log("Table Berhasil di Buat");
    console.table(countGroupContact);
  }

  static updateGroupContactView(countGroupContact) {
    console.log("Table Berhasil di Update");
    console.table(countGroupContact);
  }

  static deleteGroupContact(countGroupContact) {
    console.log("Data ini Behasil di Hapus");
    console.table(countGroupContact);
  }

  static createGroupsView(countGroups) {
    console.log("Table ini Berhasil di Buat");
    console.table(countGroups);
  }

  static updateGroupsView(countGroups) {
    console.log("Data Berhasil di Update");
    console.table(countGroups);
  }

  static deleteGroupsView(countGroups) {
    console.log("Data ini Berhasil di Hapus");
    console.table(countGroups);
  }

  static showGroupsView(countGroups) {
    console.log("Data Berhasil di Tampilkan");
    console.table(countGroups);
  }

  static errorView(err) {
    console.log(err.message);
  }
}

module.exports = AddressBookView;

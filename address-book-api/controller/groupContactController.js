let GroupContact = require("../model/groupContact");
// let AddressBookView = require("./view");

class GroupContactController {
  // static help() {
  //   AddressBookView.helpView()
  // }

  static create = async (req,res) => {
    try {
      const body = req.body;
      await GroupContact.create(body.contactId,body.groupId);
      res.status(200).json({
        status: 200,
        message: "Success Create Group Contact",
        data: body,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  // static create(values) {
  //   const [ contactId, groupId ] = values; 
  //   GroupContact.create(contactId, groupId).then(() => {
  //     AddressBookView.createView('GroupContact');
  //   }).catch(err=> {
  //     AddressBookView.ErrorView(err);
  //   })
  // }

  // static update(values) {
  //   const [id, contactId, groupId] = values;
  //   GroupContact.update(id, contactId, groupId).then(() => {
  //     AddressBookView.updateView('GroupContact');
  //   }).catch(err=> {
  //     AddressBookView.ErrorView(err);
  //   })
  // }

  // static delete(id) {
  //   GroupContact.delete(id).then(() => {
  //     AddressBookView.deleteView('GroupContact');
  //   }).catch(err=> {
  //     AddressBookView.ErrorView(err);
  //   })
  // }

  // static show() {
  //   GroupContact.show().then((rows) => {
  //     console.log(rows)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
}


module.exports = GroupContactController;
let Groups = require("../model/groups");
// let AddressBookView = require("./view");

class GroupsController {
  // static help() {
  //   AddressBookView.helpView()
  // }

  static create = async (req,res) => {
    try {
      const body = req.body;
      await Groups.create(body.groupName);
      res.status(200).json({
        status: 200,
        message: "Success Create Groups",
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
  //   const [ groupName ] = values; 
  //   Groups.create(groupName).then(() => {
  //     AddressBookView.createView('Groups');
  //   }).catch(err=> {
  //     AddressBookView.ErrorView(err);
  //   })
  // }

  // static update(values) {
  //   const [id, groupName] = values;
  //   Groups.update(id, groupName).then(() => {
  //     AddressBookView.updateView('Groups');
  //   }).catch(err=> {
  //     AddressBookView.ErrorView(err);
  //   })
  // }

  // static delete(id) {
  //   Groups.delete(id).then(() => {
  //     AddressBookView.deleteView('Groups');
  //   }).catch(err=> {
  //     AddressBookView.ErrorView(err);
  //   })
  // }

  // static show() {
  //   Groups.show().then((rows) => {
  //     console.log(rows)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
}


module.exports = GroupsController;
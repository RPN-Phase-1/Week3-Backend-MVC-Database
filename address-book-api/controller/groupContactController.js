let GroupContact = require("../model/groupContact");

class GroupContactController {
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

  static update = async (req,res) => {
    try {
      let body = req.body;
      body = {id: req.params.id, ...body}
      await GroupContact.update(body.id, body.contactId, body.groupId);
      res.status(200).json({
        status: 200,
        message: "Success update Group Contact",
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

  static delete = async (req,res) => {
    try {
      const id = req.params.id
      await GroupContact.delete(id);
      res.status(200).json({
        status: 200,
        message: "Success delete Group Contact",
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
}


module.exports = GroupContactController;
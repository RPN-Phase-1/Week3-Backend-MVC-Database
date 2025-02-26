let Groups = require("../model/groups");

class GroupsController {

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

  static update = async (req,res) => {
    try {
      const body = req.body;
      const id = req.params.id
      await Groups.update(id, body.groupName);
      res.status(200).json({
        status: 200,
        message: "Success Update Groups",
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
      await Groups.delete(id);
      res.status(200).json({
        status: 200,
        message: "Success Delete Groups",
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  static show = async (req,res) => {
    try {
      const result = await Groups.show();
      if (result.length) {
        res.status(200).send({
          status: 200,
          message: "Get Groups Success",
          data: result,
        });
      } else {
        res.status(404).send({
          status: 404,
          message: "Data not found",
          data: result,
        });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
}


module.exports = GroupsController;
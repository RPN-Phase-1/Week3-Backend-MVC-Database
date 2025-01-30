let Contact = require("../model/contact");
// let AddressBookView = require("./view");

class ContactController {
  // static help() {
  //   AddressBookView.helpView()
  // }

  static create = async (req,res) => {
    try {
      const body = req.body;
      await Contact.create(
        body.name,
        body.phoneNumber,
        body.company,
        body.email
      );
      res.status(200).json({
        status: 200,
        message: "Success Create Contact",
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
      body = {id: Number(req.params.id), ...body};
      await Contact.update(
        body.id,
        body.name,
        body.phoneNumber,
        body.company,
        body.email
      );
      res.status(200).json({
        status: 200,
        message: "Success update Contact",
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
      await Contact.delete(id);
      res.status(200).json({
        status: 200,
        message: "Success delete Contact id = " + id,
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
      const result = await Contact.show();
      if (result.length) {
        res.status(200).send({
          status: 200,
          message: "Get Contacts Success",
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


module.exports = ContactController;
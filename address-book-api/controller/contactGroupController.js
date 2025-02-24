const ContactGroups = require("../model/contactGroup");

class contactGroupController {
  static async createContactGroup(req, res) {
    const { ContactId, GroupId } = req.body;
    try {
      const create = await ContactGroups.create(ContactId, GroupId);
      res.status(201).json(create);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat membuat kontak grup");
    }
  }
  static async updateContactGroup(req, res) {
    const { id } = req.params;
    const { ContactId, GroupId } = req.body;
    try {
      const update = await ContactGroups.update(id, ContactId, GroupId);
      res.json(update);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat memperbarui kontak grup");
    }
  }
  static async deleteContactGroup(req, res) {
    const { id } = req.params;
    try {
      await ContactGroups.delete(id);
      res.sendStatus(204);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat menghapus kontak grup");
    }
  }
}

module.exports = contactGroupController;

const Contact = require("../model/contact");

class contactController {
  static async getContacts(req, res) {
    try {
      const contacts = await Contact.showWithGroups();
      res.json(contacts);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat mengambil data kontak");
    }
  }

  static async createContact(req, res) {
    const { name, phoneNumber, company, email } = req.body;
    try {
      const create = await Contact.create(name, phoneNumber, company, email);
      res.status(201).json(create);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat membuat kontak");
    }
  }

  static async updateContact(req, res) {
    const { id } = req.params;
    const { name, phoneNumber, company, email } = req.body;
    try {
      const update = await Contact.update(
        id,
        name,
        phoneNumber,
        company,
        email
      );
      res.json(update);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat memperbarui kontak");
    }
  }

  static async deleteContact(req, res) {
    const { id } = req.params;
    try {
      await Contact.delete(id);
      res.status(204);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat menghapus kontak");
    }
  }

  static async showContact() {
    try {
      const showContact = await Contact.showWithGroups();
      View.showContact(showContact);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = contactController;

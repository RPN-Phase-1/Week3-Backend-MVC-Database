const Groups = require("../model/groups");

class groupController {
  static async getGroups(req, res) {
    try {
      const groups = await Groups.showWithContacts();
      res.json(groups);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat mengambil data grup");
    }
  }
  static async createGroups(req, res) {
    const { groupName } = req.body;
    try {
      const create = await Groups.create(groupName);
      res.status(201).json(create);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat membuat grup");
    }
  }

  static async updateGroups(req, res) {
    const { id } = req.params;
    const { groupName } = req.body;
    try {
      const update = await Groups.update(id, groupName);
      res.json(update);
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan saat memperbarui grup");
    }
  }

  static async deleteGroups(req, res) {
    const { id } = req.params;
    try {
      await Groups.deleteByGroupId(id);
      await Groups.delete(id);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).send("Terjadi kesalahan saat menghapus grup");
    }
  }
}

module.exports = groupController;

const express = require("express");
const router = express.Router();
const contactController = require("./controller/contactController");
const groupController = require("./controller/groupsController");
const contactGroupController = require("./controller/groupContactController");

router
  .route("/contact")
  .get(contactController.show)
  .post(contactController.create);

router.put("/contact/:id", contactController.update);
router.delete("/contact/:id", contactController.delete);

router
  .route("/groups")
  // .get(groupController.show)
  .post(groupController.create);
// router.put("/groups/:id", groupController.updateGroups);
// router.delete("/groups/:id", groupController.deleteGroups);

router.post("/contactGroup", contactGroupController.create);
// router.put("/contactGroup/:id", contactGroupController.updateContactGroup);
// router.delete("/contactGroup/:id", contactGroupController.deleteContactGroup);

module.exports = router;
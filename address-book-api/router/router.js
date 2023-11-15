const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");
const groupController = require("../controller/groupController");
const contactGroupController = require("../controller/groupContactController");

router
  .route("/contact")
  .get(contactController.read)
  .post(contactController.create);

router.put("/contact/:id", contactController.update);
router.delete("/contact/:id", contactController.del);

router
  .route("/groups")
  .get(groupController.read)
  .post(groupController.create);
router.put("/groups/:id", groupController.update);
router.delete("/groups/:id", groupController.del);

router.post("/groupContact", contactGroupController.create);
router.put("/groupContact/:id", contactGroupController.update);
router.delete("/groupContact/:id", contactGroupController.del);

module.exports = router;
const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");
const groupController = require("../controller/groupController");
const contactGroupController = require("../controller/contactGroupController");
const {
  contactValidation,
  contactGroupValidation,
  groupValidation,
} = require("../validations/index");

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

const validateId = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

router
  .route("/contact")
  .get(contactController.getContacts)
  .post(
    validate(contactValidation.createContact),
    contactController.createContact
  );

router.patch(
  "/contact/:id",
  validateId(contactValidation.contactId),
  validate(contactValidation.updateContact),
  contactController.updateContact
);
router.delete(
  "/contact/:id",
  validateId(contactValidation.contactId),
  contactController.deleteContact
);

router
  .route("/group")
  .get(groupController.getGroups)
  .post(validate(groupValidation.createGroup), groupController.createGroups);

router.patch(
  "/group/:id",
  validateId(groupValidation.groupId),
  validate(groupValidation.updateGroup),
  groupController.updateGroups
);

router.delete(
  "/group/:id",
  validateId(groupValidation.groupId),
  groupController.deleteGroups
);

router.post(
  "/contactGroup",
  validate(contactGroupValidation.createContactGroup),
  contactGroupController.createContactGroup
);

router.patch(
  "/contactGroup/:id",
  validateId(contactGroupValidation.contactGroupId),
  validate(contactGroupValidation.updateContactGroup),
  contactGroupController.updateContactGroup
);

router.delete(
  "/contactGroup/:id",
  validateId(contactGroupValidation.contactGroupId),
  contactGroupController.deleteContactGroup
);

module.exports = router;

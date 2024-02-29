const express = require('express')
const router = express.Router()
const contactController = require('../controller/contactController')
const groupController = require('../controller/groupController')
const contactGroupController = require('../controller/contactGroupController')

router
  .route('/contact')
  .get(contactController.showContact)
  .post(contactController.createContact)

router
  .route('/contact/:id')
  .put(contactController.updateContact)
  .delete(contactController.deleteContact)

router 
  .route('/groups/')
  .get(groupController.getGroups)
  .post(groupController.createGroups)

router
  .route('/groups/:id')
  .put(groupController.updateGroups)
  .delete(groupController.deleteGroups)

  router.post("/contactGroup", contactGroupController.createContactGroup)
  router.put("/contactGroup/:id", contactGroupController.updateContactGroup)
  router.delete("/contactGroup/:id", contactGroupController.deleteContactGroup)


module.exports = router
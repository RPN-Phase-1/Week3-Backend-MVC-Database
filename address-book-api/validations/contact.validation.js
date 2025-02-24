const Joi = require("joi");

const createContact = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  company: Joi.string().required(),
  email: Joi.string().email().required(),
});

const updateContact = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  company: Joi.string().required(),
  email: Joi.string().email().required(),
});

const contactId = Joi.object({
  id: Joi.number().integer().required(),
});

module.exports = {
  createContact,
  updateContact,
  contactId,
};

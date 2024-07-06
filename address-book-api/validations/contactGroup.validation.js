const Joi = require('joi');

const createContactGroup = Joi.object({
    ContactId: Joi.number().integer().required(),
    GroupId: Joi.number().integer().required()
});

const updateContactGroup = Joi.object({
    ContactId: Joi.number().integer().optional(),
    GroupId: Joi.number().integer().optional()
});

const contactGroupId = Joi.object({
    id: Joi.number().integer().required()
});

module.exports = {
    createContactGroup,
    updateContactGroup,
    contactGroupId,
};
const Joi = require('joi');

const createGroup = Joi.object({
    groupName: Joi.string().required()
});

const updateGroup = Joi.object({
    groupName: Joi.string().optional()
});

const groupId = Joi.object({
    id: Joi.number().integer().required()
});

module.exports = {
    createGroup,
    updateGroup,
    groupId,
};
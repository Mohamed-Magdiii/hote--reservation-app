const Joi = require('joi');

const innerPermissions = Joi.object().keys({
  key: Joi.string().required(),
  status: Joi.boolean().required(),
});

const permissions = Joi.object().keys({
  key: Joi.string().required(),
  status: Joi.boolean().required(),
  permissions: Joi.array().required().items(innerPermissions),
});

module.exports.create = Joi.object({
  title: Joi.string().required(),
  permissions: Joi.array().required().items(permissions),
});

module.exports.update = Joi.object({
  title: Joi.string().allow(''),
  permissions: Joi.array().required(),
});

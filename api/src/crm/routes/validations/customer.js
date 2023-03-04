const Joi = require('joi');

module.exports.find = Joi.object({
  firstName: Joi.string(),
});

module.exports.getCustomer = Joi.object({
  id: Joi.string(),
});

module.exports.create = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),

  country: Joi.string().required(),
  nationality: Joi.string(),
  city: Joi.string(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  dob: Joi.string(),
  gender: Joi.string(),
  // address: Joi.string(),

  password: Joi.string().required(),
  declarations: Joi.array().items(Joi.string()),
  // ibid: Joi.string(),
});

module.exports.update = Joi.object({
  title: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),

  country: Joi.string(),
  nationality: Joi.string(),
  city: Joi.string(),
  phone: Joi.string(),
  dob: Joi.string(),
  gender: Joi.string(),
  address1: Joi.string(),
  address2: Joi.string(),
  declarations: Joi.array().items(Joi.string()),
});

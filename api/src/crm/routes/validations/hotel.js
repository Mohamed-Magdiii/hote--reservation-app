const Joi = require('joi');

module.exports.hotel = Joi.object({
  name: Joi.string().required(),
});

module.exports.create = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  city: Joi.string().required(),
  address: Joi.string().required(),
  photos: Joi.array(),
  distance: Joi.string().required(),
  desc: Joi.string().required(),
  rooms: Joi.array(),
  rating: Joi.number(),
  cheapestPrice: Joi.string(),
  featured: Joi.boolean(),

});

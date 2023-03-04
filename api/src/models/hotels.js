const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      // type of properties  => hotels , cabins , appartment
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    rooms: {
      type: [{ type: Schema.ObjectId, ref: 'rooms', required: true }],
    },
    cheapestPrice: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports.Model = model('hotels', HotelSchema);
module.exports.Schema = HotelSchema;

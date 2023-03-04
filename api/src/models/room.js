const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: [String],
  },

  desc: {
    type: String,
    required: true,
  },
  roomNumbrs: [{
    number: Number,
    unavailableDates: { type: [String] },
  }],

},
{ timestamps: true });

module.exports.Model = model('rooms', RoomSchema);
module.exports.Schema = RoomSchema;

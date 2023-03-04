/* eslint-disable linebreak-style */
const { model, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const jwt = require('jsonwebtoken');
const { keys } = require('../common');

const UserSchema = new Schema({
  recordId: { type: String },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  roleId: {
    type: Schema.ObjectId,
    ref: 'Role',
  },
  username:{
  type:String,
  required:true
  },
  password: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  image:{
    type:String,
  },
  mobile: String,
  phone: String,
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

UserSchema.methods.generateAuthToken = async (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
    is_active: user.is_active,
    roleId: user.roleId,
  };
  const token = jwt.sign(
    payload,
    keys.jwtKey,
    { expiresIn: '1h' },
  );
  return token;
};

UserSchema.index({
  firstName: 1,
  lastName: 1,
  email: 1,
  phone: 1,
  createdAt: 1,
});

UserSchema.plugin(mongoosePaginate);
// UserSchema.index({ rec: 1 });

module.exports.Model = model('users', UserSchema);
module.exports.Schema = UserSchema;

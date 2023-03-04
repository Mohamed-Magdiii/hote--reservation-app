const { model, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const jwt = require('jsonwebtoken');
const { keys, CONSTANTS } = require('../common');

const CustomerSchema = new Schema(
  {
    recordId: { type: String },
    title: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    country: { type: String, required: true },
    nationality: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    dob: { type: String },
    gender: { type: String },
    address: { type: String },
    address2: { type: String },
    zipCode: { type: String },
    language: { type: String, default: 'en-gb' },

    stages: {
      type: {
        kycUpload: { type: Boolean, default: false },
        kycApproved: { type: Boolean, default: false },
        kycRejected: { type: Boolean, default: false },
        createAccount: { type: Boolean, default: false },
        individual: {
          type: {
            updateProfile: { type: Boolean, default: false },
            createAccount: { type: Boolean, default: false },
            madeDeposit: { type: Boolean, default: false },
            startTrading: { type: Boolean, default: false },
          },
        },
        individualIb: {
          type: {
            updateProfile: { type: Boolean, default: false },
            questionaire: { type: Boolean, default: false },
            agreementApproved: { type: Boolean, default: false },
          },
        },
      },
      default: {
        kycUpload: false,
        kycApproved: false,
        kycRejected: false,
        createAccount: false,
        individual: {
          updateProfile: false,
          createAccount: false,
          madeDeposit: false,
          startTrading: false,
        },
        individualIb: {
          updateProfile: false,
          questionaire: false,
          agreementApproved: false,
        },
      },
    },

    source: {
      type: String,
      enum: Object.keys(CONSTANTS.CUSTOMER_SOURCES),
      default: CONSTANTS.CUSTOMER_SOURCES.REGISTER_DEMO,
    },
    category: {
      type: String,
      enum: Object.keys(CONSTANTS.CUSTOMER_TYPES),
      default: CONSTANTS.CUSTOMER_TYPES.DEMO,
    },

    isActive: { type: Boolean, default: true },
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },

    // salesAgentId: { type: Schema.Types.ObjectId },
    password: { type: String },
    declarations: [{ type: String }],
  },
  { timestamps: true },
);

CustomerSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({
    _id: this.id,
    email: this.email,
    is_active: this.is_active,
  }, keys.jwtKey,
  { expiresIn: '24h' });

  return token;
};

CustomerSchema.index({
  firstName: 1,
  lastName: 1,
  email: 1,
  phone: 1,
  country: 1,
  nationality: 1,
  source: 1,
  category: 1,
  createdAt: -1,
});

CustomerSchema.plugin(mongoosePaginate);

// CustomerSchema.index({ rec: 1 });

module.exports.Model = model('customers', CustomerSchema);
module.exports.Schema = CustomerSchema;

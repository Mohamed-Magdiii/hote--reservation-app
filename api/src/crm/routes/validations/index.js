// exporting all validations

const authValidations = require('./auth');
const userValidations = require('./user');
const roleValidations = require('./role');

const bankAccountValidations = require('./bank-accounts');
const customerValidations = require('./customer');
const requestValidations = require('./request');
const transactionValidations = require('./transaction');
const hotelValidations = require('./hotel');

module.exports = {
  authValidations,
  userValidations,
  roleValidations,
  customerValidations,
  bankAccountValidations,
  requestValidations,
  transactionValidations,
  hotelValidations,
};

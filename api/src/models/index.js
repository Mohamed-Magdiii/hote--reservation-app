/* eslint-disable object-property-newline */
// Exporting all schemas
const UserModel = require('./user');
const RoleModel = require('./role');
const BankAccountModel = require('./bank-account');
const CustomerModel = require('./customer');
const RequestModel = require('./request');
const ActivityModel = require('./activity');
const TransactionModel = require('./transaction');
const Dictionary = require('./dictionary');
const HotelModel = require('./hotels');
const RoomModel = require('./room');

module.exports = {
  UserModel,
  RoleModel,
  CustomerModel,
  RequestModel,
  BankAccountModel,
  ActivityModel,
  TransactionModel,
  Dictionary,
  HotelModel,
  RoomModel,
};

const RoleController = require('./role.controller');
const UserController = require('./user.controller');
const hotelsController = require('./hotels.controller');

const ActivityController = require('./activity.controller');
const BankAccountController = require('./bank-account.controller');
const ClientController = require('./customer/client.controller');
const LeadController = require('./customer/lead.controller');

const RequestController = require('./request.controller');

module.exports = {
  RoleController,
  UserController,

  // customer controllers
  ActivityController,
  BankAccountController,

  ClientController,
  LeadController,

  RequestController,
  hotelsController,
};

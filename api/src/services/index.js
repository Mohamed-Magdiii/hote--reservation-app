const userService = require('./user.service');
const hotelService = require('./hotels.service');
const roleService = require('./role.service');

const activityService = require('./activity.service');
const bankAccountService = require('./bank-account.service');
const customerService = require('./customer.service');
const requestService = require('./request.service');
const transactionService = require('./transaction.service');
const roomService = require('./rooms.service');

module.exports = {
  userService,
  roleService,
  hotelService,
  // customer services
  activityService,
  bankAccountService,
  customerService,
  requestService,
  transactionService,
  roomService,
};

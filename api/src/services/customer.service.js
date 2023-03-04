const { CustomerModel } = require('../models');
const Cruds = require('./Cruds');
const { comparePassword } = require('../utils');

class CustomerService extends Cruds {
  async login(email, password) {
    const customer = await this.findOne({ email });

    if (!customer) throw new Error('Invalid credentials');
    if (!customer.isActive) throw new Error('User disabled, please contact admin.');
    const passwordMatch = await comparePassword(password, customer.password);
    if (!passwordMatch) throw new Error('Invalid credentials');

    if (passwordMatch) {
      const token = CustomerModel.Model(customer).generateAuthToken();
      return {
        token,
        // firstName: customer.firstName,
        // lastName: customer.lastName,
        // email: customer.email,
        customer:customer,
      };
    }
    throw new Error('Invalid credentials');
  }

  async saveTradingAccount(customerId, id, number, platform) {
    const customer = await this.findById(customerId, null, false);
    customer.tradingAccounts.push({
      tradingAccountId: id,
      tradingAccount: number,
      platform,
    });
    return customer.save();
  }
}

module.exports = new CustomerService(CustomerModel.Model, CustomerModel.Schema);

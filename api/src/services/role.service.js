const { RoleModel } = require('../models');
const Cruds = require('./Cruds');
const { permissionsGroup, logger } = require('../common');

class Role extends Cruds {
  createNewRole(params) {
    logger.info(permissionsGroup.permissions.roles);
    return this.create({
      ...params,
      permissions: permissionsGroup,
    });
  }
}

module.exports = new Role(RoleModel.Model, RoleModel.Schema);

const express = require('express');

const router = express.Router();
const { roleValidations } = require('./validations');
const { validationMiddleware } = require('./middlewares');
const { RoleController } = require('../controllers');

// for adding record
router.post('/', validationMiddleware(roleValidations.create), RoleController.createRecord);
router.get('/paginate', RoleController.getPaginate);
// for get records
router.get('/', RoleController.getRecords);

// for get record  by id
router.get('/:id', RoleController.getRecordById);

// for updating record by id
router.patch('/:id', validationMiddleware(roleValidations.update), RoleController.updateRecordById);

// for deleting record by id
router.delete('/:id', RoleController.deleteRecordById);

module.exports = router;

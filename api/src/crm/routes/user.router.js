const express = require('express');

const router = express.Router();
const { userValidations } = require('./validations');
const { validationMiddleware } = require('./middlewares');
const { UserController } = require('../controllers');

// for adding record
router.post('/', validationMiddleware(userValidations.create), UserController.createRecord);

// for paginate records
router.get('/paginate', UserController.getPaginate);

// for get records
router.get('/', UserController.getRecords);

// for get record  by id
router.get('/:id', UserController.getRecordById);

// for updating record by id
router.patch('/:id', validationMiddleware(userValidations.update), UserController.updateRecordById);

// for deleting record by id
router.delete('/:id', UserController.deleteRecordById);

module.exports = router;

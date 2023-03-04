const express = require('express');

const router = express.Router();
const vldtns = require('../validations').customerValidations;
const { validationMiddleware, validationPathMiddleware } = require('../middlewares');
const ctr = require('../../controllers').ClientController;

router.post('/', validationMiddleware(vldtns.create), ctr.createClient);
router.get('/', ctr.getPaginate);
router.get('/:id', validationPathMiddleware(vldtns.getCustomer), ctr.getRecordById);
router.patch('/:id', validationMiddleware(vldtns.update), ctr.updateRecordById);
router.delete('/:id', ctr.deleteRecordById);

module.exports = router;

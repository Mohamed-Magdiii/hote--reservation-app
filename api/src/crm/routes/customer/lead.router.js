const express = require('express');

const router = express.Router();
const vldtns = require('../validations').customerValidations;
const { validationMiddleware } = require('../middlewares');
const ctr = require('../../controllers').LeadController;

router.post('/', validationMiddleware(vldtns.create), ctr.createLead);
router.get('/', validationMiddleware(vldtns.find, true), ctr.getPaginate);
router.get('/:id', ctr.getRecordById);
router.patch('/:id', validationMiddleware(vldtns.update), ctr.updateRecordById);
router.delete('/:id', ctr.deleteRecordById);

module.exports = router;

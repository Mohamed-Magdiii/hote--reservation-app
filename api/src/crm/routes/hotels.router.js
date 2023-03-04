const { ROLES, ROLE } = require('../../common/constants');
const { hotelsController } = require('../controllers');
const { hotel, create } = require('./validations').hotelValidations;
const router = require('express').Router();
const { validationMiddleware, authMiddleware, authRole } = require('./middlewares/index');

router.post('/', hotelsController.createHotel);
// router.post('/', [authMiddleware, authRole(ROLE.ADMIN), validationMiddleware(create)], hotelsController.createHotel);

router.get('/', hotelsController.getRecords);
router.get('/paginate', hotelsController.getRecords);
router.get('/countByCity', hotelsController.getCountByCity);
router.get('/countByType', hotelsController.getCountByType);

router.delete('/:id', hotelsController.deleteRecordById);
router.get('/find/:id', hotelsController.getRecordById);
router.get('/rooms/:id', hotelsController.getRoomsByHotelId);
router.put('/:id', hotelsController.updateRecord);

module.exports = router;

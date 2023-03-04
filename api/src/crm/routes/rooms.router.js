const roomsController = require('../controllers/rooms.controller');

const router = require('express').Router();

router.post('/:hotelId', roomsController.createRoom);

router.delete('/:id/:hotelId', roomsController.deleteRecordById);

router.put('/:id', roomsController.updateRecord);
router.put('/availablity/:id', roomsController.updateRoomByAvailabilty);

router.get('/', roomsController.getRecords);

router.get('/:id', roomsController.getRecordById);

module.exports = router;

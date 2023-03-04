const service = require('../../services').roomService;
const { ApiResponse } = require('../../utils');
const { ResponseMessages } = require('../../common/index');

class roomsController {
  async createRoom(req, res, next) {
    try {
      const params = req.body;
      const paramId = req.params.hotelId;
      const rec = await service.createRoom(params, paramId);
      return ApiResponse(res, true, ResponseMessages.RECORD_CREATE_SUCCESS, rec);
    } catch (error) {
      return next(error);
    }
  }

  async getRecords(req, res, next) {
    try {
      const allRooms = await service.find();
      return ApiResponse(res, true, ResponseMessages.RECORD_FETCH_SUCCESS, allRooms);
    } catch (error) {
      return next(error);
    }
  }

  async getRecordById(req, res, next) {
    try {
      const rec = await service.findById(req.params.id);
      return ApiResponse(res, true, ResponseMessages.RECORD_FETCH_SUCCESS, rec);
    } catch (error) {
      return next(error);
    }
  }

  async deleteRecordById(req, res, next) {
    try {
      const rec = await service.deleteRoom(req.params.id, req.params.hotelId);
      return ApiResponse(res, true, ResponseMessages.RECORD_DELETE_SUCCESS, rec);
    } catch (error) {
      return next(error);
    }
  }

  async getPagination(req, res, next) {
    try {
      const rec = await service.findWithPagination();
      return ApiResponse(res, true, ResponseMessages.RECORD_FETCH_SUCCESS, true);
    } catch (error) {

    }
  }

  async updateRecord(req, res, next) {
    try {
      const { body } = req.body;
      const rec = await service.updateById(req.params.id, req.body);
      return ApiResponse(res, true, ResponseMessages.RECORD_UPDATE_SUCCESS, rec);
    } catch (error) {
      return next(error);
    }
  }

  async updateRoomByAvailabilty(req, res, next){
    try {
      const  {id} = req.params;
        const rec = await service.updateRoom(id, req.body)
        return ApiResponse(res,true,ResponseMessages.RECORD_UPDATE_SUCCESS, rec)
    } catch (error) {
        next(error)
    } 
  }
}

module.exports = new roomsController();

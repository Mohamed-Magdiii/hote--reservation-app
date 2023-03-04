const service = require('../../services').hotelService;
const { ApiResponse } = require('../../utils');
const { ResponseMessages } = require('../../common/index');

class hotelsController {
  async createHotel(req, res, next) {
    try {
      const params = req.body;
      const rec = await service.createHotel(params);
      return ApiResponse(res, true, ResponseMessages.RECORD_CREATE_SUCCESS, rec);
    } catch (error) {
      return next(error);
    }
  }

  async getRecords(req, res, next) {
    try {
      const allHotels = await service.getHotels(req);
      return ApiResponse(res, true, ResponseMessages.RECORD_FETCH_SUCCESS, allHotels);
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
      const rec = await service.deleteById(req.params.id);
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

  async getCountByCity(req, res, next) {
    try {
      const { body } = req.body;
      const rec = await service.getByCount(req);
      return ApiResponse(res, true, ResponseMessages.RECORD_FETCH_SUCCESS, rec);
    } catch (error) {
      return next(error);
    }
  }

  async getCountByType(req, res, next) {
    try {
      const { body } = req.body;
      const rec = await service.getCountByType(req);
      return ApiResponse(res, true, ResponseMessages.RECORD_FETCH_SUCCESS, rec);
    } catch (error) {
      return next(error);
    }
  }
  async getRoomsByHotelId(req, res, next) {
    try {
      const { id } = req.params
      const rec = await service.getRoomsByHotelId(id);
      return ApiResponse(res, true, ResponseMessages.RECORD_FETCH_SUCCESS, rec);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new hotelsController();

const { RoomModel, HotelModel } = require('../models');
const hotelService = require('./hotels.service');
const Cruds = require('./Cruds');

class roomService extends Cruds {
  async createRoom(params, hotelId) {
    const newRoom = await this.create(params);
    await HotelModel.Model.findByIdAndUpdate(hotelId, { $push: { rooms: newRoom._id } });
    return newRoom;
  }

  async deleteRoom(id, hotelId) {
    const rec = await this.deleteById(id);
    await hotelService.updateByIdWithPull(hotelId, { rooms: id });
    return rec;
  }

  async updateRoom(id, params) {
    
    const rec = await RoomModel.Model.updateOne({ 'roomNumbrs._id': id }, {
      $push:{
        'roomNumbrs.$.unavailableDates': params.dates,
      },
    });
    return rec;
  }
}

module.exports = new roomService(RoomModel.Model, RoomModel.Schema);

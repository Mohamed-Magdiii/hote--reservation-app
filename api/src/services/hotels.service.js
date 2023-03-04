const { HotelModel, RoomModel } = require('../models');
const Cruds = require('./Cruds');

class HotelService extends Cruds {
  async createHotel(params) {
    const newHotel = await this.create(params);
    return newHotel;
  }

  async getHotels(req) {
    const limit = parseInt(req.query.limit);
    const { min, max, ...others } = req.query;
    console.log(max);
    const newHotel = await HotelModel.Model.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999 },
    }).limit(limit);
    return newHotel;
  }

  async getByCount(req) {
    const cities = req.query.cities.split(',');
    const list = await Promise.all(
      cities.map(async (city) => HotelModel.Model.countDocuments({ city })),
    );
    return list;
  }

  async getCountByType(req) {
    const hotelCount = await HotelModel.Model.countDocuments({ type: 'hotel' });
    const apartmentCount = await HotelModel.Model.countDocuments({
      type: 'apartment',
    });
    const resortCount = await HotelModel.Model.countDocuments({
      type: 'resort',
    });
    const villaCount = await HotelModel.Model.countDocuments({ type: 'villa' });
    const cabinCount = await HotelModel.Model.countDocuments({ type: 'cabin' });

    return [
      { type: 'hotels', count: hotelCount },
      { type: 'apartment', count: apartmentCount },
      { type: 'resort', count: resortCount },
      { type: 'villas', count: villaCount },
      { type: 'cabins', count: cabinCount },
    ];
  }
  async getRoomsByHotelId(id){
    const hotel = await this.findById(id);
    const list = await Promise.all(
      hotel.rooms.map( (room) => {return RoomModel.Model.findById(room)}),
    );
    return list;
  }
}

module.exports = new HotelService(HotelModel.Model, HotelModel.Schema);

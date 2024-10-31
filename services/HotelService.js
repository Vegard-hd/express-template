const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class HotelService {
  constructor(db) {
    this.client = db.sequelize;
    this.User = db.User;
    // this.Room = db.Room;
    this.Hotel = db.Hotel;
    // this.Reservation = db.Reservation;
  }

  //Create a hotel using raw SQL
  async create(name, location) {
    sequelize
      .query("INSERT INTO hotels (Name, Location) VALUES (:Name, :Location)", {
        replacements: {
          Name: name,
          Location: location,
        },
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  //Get all hotels using raw SQL
  async get() {
    const hotels = await sequelize.query("SELECT * FROM hotels", {
      type: QueryTypes.SELECT,
    });
    return hotels;
  }

  async getHotelDetails(hotelId, userId) {
    const hotel = await this.Hotel.findOne({
      where: {
        id: hotelId,
      },
      include: {
        model: this.User,
        through: {
          attributes: ["Value"],
        },
      },
    });
    hotel.avg =
      hotel.Users.map((x) => x.Rate.dataValues.Value).reduce(
        (a, b) => a + b,
        0,
      ) / hotel.Users.length;
    hotel.rated =
      hotel.Users.filter((x) => x.dataValues.id == userId).length > 0;
    return hotel;
  }

  //Delete a hotel using raw SQL
  async deleteHotel(hotelId) {
    await sequelize
      .query("DELETE FROM hotels WHERE id = :hotelId", {
        replacements: {
          hotelId: hotelId,
        },
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  //Rate a hotel using raw SQL
  async makeARate(userId, hotelId, value) {
    sequelize
      .query(
        "INSERT INTO rates (Value, HotelId, UserId) VALUES (:value, :hotelId, :userId)",
        {
          replacements: {
            userId: userId,
            hotelId: hotelId,
            value: value,
          },
        },
      )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}

module.exports = HotelService;

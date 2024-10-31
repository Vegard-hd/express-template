const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");
class RoomService {
	constructor(db) {
		this.client = db.sequelize;
	}

	//Get all rooms using raw SQL
	async get() {
		const rooms = await sequelize.query("SELECT * FROM rooms", {
			type: QueryTypes.SELECT,
		});
		return rooms;
	}

	//Create a room using raw SQL
	async create(capacity, pricePerDay, hotelId) {
		sequelize
			.query(
				"INSERT INTO rooms (Capacity, PricePerDay, HotelId) VALUES (:Capacity, :PricePerDay, :HotelId)",
				{
					replacements: {
						Capacity: capacity,
						PricePerDay: pricePerDay,
						HotelId: hotelId,
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

	//Get all rooms for a specific hotel using raw SQL
	async getHotelRooms(hotelId) {
		const rooms = await sequelize.query(
			"SELECT * FROM rooms WHERE HotelId = :hotelId",
			{
				replacements: {
					hotelId: hotelId,
				},
				type: QueryTypes.SELECT,
			},
		);
		return rooms;
	}

	//Delete a room using raw SQL
	async deleteRoom(roomId) {
		await sequelize
			.query("DELETE FROM rooms WHERE id = :roomId", {
				replacements: {
					roomId: roomId,
				},
			})
			.then((result) => {
				return result;
			})
			.catch((err) => {
				return err;
			});
	}

	//Rent a specified room using raw SQL
	async rentARoom(userId, roomId, startDate, endDate) {
		sequelize
			.query("CALL insert_reservation(:UserId, :RoomId, :StartDate, :EndDate)", {
				replacements: {
					RoomId: roomId,
					UserId: userId,
					StartDate: startDate,
					EndDate: endDate,
				},
			})
			.then((result) => {
				return result;
			})
			.catch((err) => {
				return err;
			});
	}
}
module.exports = RoomService;

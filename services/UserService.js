const { QueryTypes } = require("sequelize");
const { Op } = require("sequelize");
class UserService {
  constructor(db) {
    this.client = db.sequelize;
    this.User = db.User;
  }

  // raw SQL query using replacements
  async rawQuery(name, password) {
    return await this.client.query(
      `
    SELECT name AS n WHERE n.password = :password AND n.name = :name`,
      {
        replacements: { password: password, name: name },
        type: QueryTypes.SELECT,
        plain: true,
      },
    );
  }

  async create(firstName, lastName, username, salt, encryptedPassword) {
    return await this.User.create({
      FirstName: firstName,
      LastName: lastName,
      Username: username,
      Salt: salt,
      EncryptedPassword: encryptedPassword,
    });
  }

  async getAll() {
    return await this.User.findAll({
      where: {},
    });
  }

  /* Getting a user using sequelize include / SQL JOIN */

  // async getOne(userId) {
  //   return await this.User.findOne({
  //     where: { id: userId },
  //     include: {
  //       model: this.Room,
  //       through: {
  //         attributes: ["StartDate", "EndDate"],
  //       },
  //       include: {
  //         model: this.Hotel,
  //       },
  //     },
  //   });
  // }

  // example of executing a join using sequelize

  /*   async getOneByName(username) {
    return await this.User.findOne({
      where: { username: username },
      include: {
        model: this.Room,
        through: {
          attributes: ["StartDate", "EndDate"],
        },
        include: {
          model: this.Hotel,
        },
      },
    });
  } */
  async getArrOfId() {
    return await this.User.findAll({
      attributes: ["id"],
    });
  }

  /* Deletes a user that has Role NOT "Admin" */
  async deleteUser(userId) {
    return await this.User.destroy({
      where: {
        id: userId,
        Role: {
          [Op.not]: "Admin",
        },
      },
    });
  }
}
module.exports = UserService;

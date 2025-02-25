const { QueryTypes } = require("sequelize");
const { Op } = require("sequelize");
class UserService {
  constructor(db) {
    this.client = db.sequelize;
    this.user = db.user;
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

  async create(firstName, lastName, username, salt, encryptedPassword, role) {
    return await this.user.create({
      first_name: firstName,
      last_name: lastName,
      username: username,
      salt: salt,
      encrypted_password: encryptedPassword,
      role: role,
    });
  }

  async getAll() {
    return await this.user.findAll({
      where: {},
    });
  }

  async getArrOfId() {
    return await this.user.findAll({
      attributes: ["id"],
    });
  }

  /* Deletes a user that has Role NOT "Admin" */
  async deleteUser(userId) {
    return await this.user.destroy({
      where: {
        id: userId,
        role: {
          [Op.not]: "admin",
        },
      },
    });
  }
}
module.exports = UserService;

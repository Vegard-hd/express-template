const { QueryTypes } = require("sequelize");
const { Op } = require("sequelize");
class TaskService {
  constructor(db) {
    this.client = db.sequelize;
    this.task = db.task;
  }

  // raw SQL query using replacements
  async rawGetWithJoin(userId, taskId) {
    return await this.client.query(
      `
    SELECT * FROM tasks AS t WHERE t.user_id = :userId AND t.id = :taskId`,
      {
        replacements: { user_id: userId, taskId: taskId },
        type: QueryTypes.SELECT,
        plain: true,
      },
    );
  }

  async create(name, description, userId) {
    return await this.task.create({
      name: name,
      description: description,
      userId: 1, //FK to user
    });
  }

  async getAll() {
    return await this.task.findAll({
      where: {},
    });
  }

  async getArrOfId() {
    return await this.task.findAll({
      attributes: ["id"],
    });
  }

  /* Deletes a user that has Role NOT "Admin" */
  async deleteUser(taskId) {
    return await this.task.destroy({
      where: {
        task_id: taskId,
      },
    });
  }
}
module.exports = TaskService;

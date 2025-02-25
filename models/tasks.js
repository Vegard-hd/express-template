module.exports = (sequelize, Sequelize) => {
  const task = sequelize.define(
    "task",
    {
      name: Sequelize.DataTypes.STRING,
      description: Sequelize.DataTypes.STRING,
      completed: Sequelize.DataTypes.BOOLEAN,
      inProgress: Sequelize.DataTypes.BOOLEAN,
    },
    {
      underscored: true,
      timestamps: true,
    },
  );
  task.associate = function (models) {
    //setup associations for user here
    task.belongsTo(models.user, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });

    // User.belongsToMany(models.Hotel, { through: models.Rate });
    // User.belongsToMany(models.Room, { through: models.Reservation });
  };
  return task;
};

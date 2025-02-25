module.exports = (sequelize, Sequelize) => {
  const task = sequelize.define(
    "task",
    {
      name: Sequelize.DataTypes.STRING,
      description: Sequelize.DataTypes.STRING,
      completed: { type: Sequelize.DataTypes.BOOLEAN, defaultValue: 0 },
      inProgress: { type: Sequelize.DataTypes.BOOLEAN, defaultValue: 0 },
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

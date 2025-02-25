module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "user",
    {
      first_name: Sequelize.DataTypes.STRING,
      last_name: Sequelize.DataTypes.STRING,
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      encrypted_password: {
        type: Sequelize.DataTypes.BLOB,
        allowNull: false,
      },
      salt: {
        type: Sequelize.DataTypes.BLOB,
        allowNull: false,
      },
      role: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: "user",
      },
    },
    { underscored: true, timestamps: false },
  );
  user.associate = function (models) {
    //setup associations for user here
    user.hasOne(models.task);
  };
  return user;
};

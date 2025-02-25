const UserService = require("../services/UserService");
const db = require("../models");
const userService = new UserService(db);
const password = "adminpassword123";
module.exports = async function createAdminUser() {
  const { pbkdf2 } = await import("node:crypto");
  const { randomBytes } = await import("node:crypto");
  const salt = randomBytes(16);
  return new Promise((resolve, reject) => {
    return pbkdf2(
      password,
      salt,
      310000,
      32,
      "sha256",
      async function (err, hashedPassword) {
        if (err) {
          throw new Error(
            "failed to hash password in createAdminUser function",
          );
        }
        await userService
          .create("admin", "admin", "admin", salt, hashedPassword, "admin")
          .then((data) => {
            resolve(data);
          })
          .catch((e) => {
            reject(e);
          });
      },
    );
  });
};

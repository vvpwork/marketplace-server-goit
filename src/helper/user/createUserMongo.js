const user = require("../../models/db/shemas/userShema");
const hashPassword = require("./hashPassword");

const createUser = newUser => {
  const hashedPassword = hashPassword(newUser.password);
  const userData = { ...newUser, password: hashedPassword };
  const User = new user(userData);
 
  return User.save();
};

module.exports = createUser;

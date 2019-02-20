const fs = require("fs");
const path = require("path");
const util = require("util");

const allUser = require("../../db/users/all-users.json");
const pathDb = path.resolve(__dirname, "../../", "db/users/all-users.json");

const writeFile = util.promisify(fs.writeFile);

const schemaUser = user => {
  const objectUser = {};
  const id = Date.now();
  const userData = { ...user, id };
  objectUser[id] = userData;
  return objectUser;
};

const checkUser = user => {
  let isChecked = false;
  Object.keys(allUser).forEach(id =>
    allUser[id].email === user.email ? (isChecked = true) : null
  );
  console.log(isChecked);
  return isChecked;
};

const addUser = userObj => {
  if (checkUser(userObj))
    return new Promise((res, rej) => {
      rej("this user already exist");
    });
  const userDB = schemaUser(userObj);
  const user = { ...allUser, ...userDB };
  return writeFile(pathDb, JSON.stringify(user));
};

module.exports = addUser;

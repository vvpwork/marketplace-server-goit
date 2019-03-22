const { Schema, model } = require("mongoose");
const timestamp = require("../../middleware/timestamp");
const uniqID = require("../../middleware/createID");
const userShema = new Schema({
  name: String,
  telephone: String,
  password: String,
  email: String
});
userShema.add({
  favoriteProducts: Array,
  viewedProducts: Array,
  orders: Array
});
userShema.plugin(timestamp);
userShema.plugin(uniqID);

const User = model("User", userShema);
module.exports = User;

const { Schema, model } = require("mongoose");
const timestmap = require("../../middleware/timestamp");

const ordersSchema = new Schema({
  creator: String,
  productsList: [{ product: String, formType: String, itemsCount: Number }],
  deliveryType: String,
  deliveryAdress: String,
  sumToPay: Number,
  status: String
});

ordersSchema.plugin(timestmap);

const Orders = model("Orders", ordersSchema);

module.exports = Orders;

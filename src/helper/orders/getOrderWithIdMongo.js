const ordersSchema = require('../../models/db/shemas/orderSchema');

const getOrderMongo = (id)=> {
   return ordersSchema.findOne({_id: id})
}

module.exports = getOrderMongo

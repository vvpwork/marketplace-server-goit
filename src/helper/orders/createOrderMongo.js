const orderModel = require('../../models/db/shemas/orderSchema');

const createOrders = data =>{
    const Orders = new orderModel(data)
    return Orders.save()
}

module.exports = createOrders

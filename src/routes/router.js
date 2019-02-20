const {routersApi} = require('../module/app');
const main = require('../routes/main/main');
const {users, getUserFromId}= require('../routes/user/');
const {getAllProducts, getProductWithId} = require('../routes/products');
const addOrder = require('../routes/orders/addOrders');


routersApi
.get('/',  main)
.post('/users', users)
.get('/users/:id', getUserFromId)
.get('/products', getAllProducts)
.get('/products/:id', getProductWithId)
.post('/orders', addOrder)
module.exports = routersApi


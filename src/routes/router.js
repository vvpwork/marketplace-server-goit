const {routersApi} = require('../module/app');
const main = require('./main/main');
const {users, getUserFromId}= require('./user/');
const {getAllProducts, getProductWithId} = require('./products');
const addOrder = require('./orders/addOrders');
const createImage = require('./imagesRoute/createImage');
const {multerImg, moveFile} = require('../helper/images');

routersApi
.get('/',  main)

.post('/users', users)
.get('/users/:id', getUserFromId)

.get('/products', getAllProducts)
.get('/products/:id', getProductWithId)

.post('/orders', addOrder)

.post('/images', multerImg.single('image'), moveFile, createImage )
module.exports = routersApi


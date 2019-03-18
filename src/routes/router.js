const {routersApi} = require('../modules/app');
const main = require('./main/main');
const {users, getUserFromId, putUser}= require('./user');
const {getAllProducts, getProductWithId, updateProductWithId} = require('./products');
const addOrder = require('./orders/addOrders');
const getOrderWithId = require('./orders/getOrderWithId');
const createImage = require('./imagesRoute/createImage');
const {multerImg, moveFile} = require('../helper/images');
// const {saveInMongo} =require('../helper/products');

routersApi
.get('/',  main)

.post('/users', users)
.get('/users/:id', getUserFromId)
.put('/user/:id', putUser )

.get('/products', getAllProducts)
.get('/products/:id', getProductWithId)
// .get('/save', saveInMongo)
.put('/products/:id', updateProductWithId)

.post('/orders', addOrder)
.get('/orders/:id', getOrderWithId)

.post('/images', multerImg.single('file'), moveFile, createImage )
module.exports = routersApi


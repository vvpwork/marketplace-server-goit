const startServer = require('./src/server/server');
const {port} = require('./configs')
const connectDB = require('./src/models/db/connectDB');
const configDB =require('./src/models/db/configsDB');

startServer(port)
connectDB(configDB)



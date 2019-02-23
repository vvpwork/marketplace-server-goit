const path = require('path');
const multer = require('multer');
const fs = require('fs');
const util = require('util');


// const renameFile = util.promisify(fs.rename)

// const userFolder = path.resolve(__dirname, '../../db/users')
const imgFolder = path.resolve(__dirname, '../../assets')

const multerStorage = multer.diskStorage({
        destination: (req, file, next)=>{
            console.log(file.originalname);
            next(null, imgFolder)
        },
        filename:(req, file, next)=>{
            next(null, file.originalname )
        }
        
}) 

const upload = multer({storage: multerStorage})

module.exports = upload

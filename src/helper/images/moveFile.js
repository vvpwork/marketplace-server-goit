const path = require("path");
const fs = require("fs");

const image_path = name => path.resolve(__dirname, "../../assets", name);
const new_image_path = name => path.resolve(__dirname, "../../db/users/", name);

const moveFile = (oldPath, newPathFolder, fileName) => {
  if (!fs.existsSync(newPathFolder)) {
    fs.mkdirSync(newPathFolder);
  }
  const nameFile = path.join(newPathFolder, fileName);
  const readStream = fs.createReadStream(oldPath);
  const writeStream = fs.createWriteStream(nameFile);
  readStream.on("open", () => console.log("start read"));
  readStream.on("error", () => console.log("read error"));
  readStream.on("close", () => {
    fs.unlink(oldPath, () => console.log("read close old file is removed"));
  });
  writeStream.on("open", () => console.log("start write"));
  writeStream.on("error", () => console.log("write error"));
  writeStream.on("close", () => console.log("is writed"));
  readStream.pipe(writeStream);
};

const moveMiddleware = (req, res, next) => {
  const id = req.body.userId;
  const fileName = req.file.originalname;
  const oldPath = image_path(fileName);
  const newPath = new_image_path("user-" + id);
  moveFile(oldPath, newPath, fileName);
  next();
};

module.exports = moveMiddleware;

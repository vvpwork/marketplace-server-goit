const path = require("path");

const createImage = (req, res) => {
  const id = req.body.userId;
  const nameFile = path.join("user-" + id);
  return res
    .status(200)
    .set("content-type", "aplication/json")
    .json({ status: `was saved in folder : ${nameFile}` })
    .end();
};

module.exports = createImage;

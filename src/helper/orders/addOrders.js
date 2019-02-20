const path = require("path");
const fs = require("fs");
const util = require("util");

const allProduct = require("../../db/products/all-products.json");
const pathDb = path.resolve(__dirname, "../../db/users/orders/");
const writeFile = util.promisify(fs.writeFile);

const checkProduct = order => {
  let isChecked = true;
  const arrId = order.products.map(id =>
    allProduct.find(prod => id == prod.id) ? true : false
  );
  if (arrId.includes(false)) isChecked = false;
  return isChecked;
};
const addOrder = order => {
  if (!checkProduct(order))
    return new Promise((res, rej) => {
      res(0);
      rej(new Error("error"));
    });

  const fileName = path.resolve(pathDb, order.user + ".json");

  fs.stat(pathDb, err => {
    if (err) fs.mkdirSync(pathDb);
  });
  return writeFile(fileName, JSON.stringify(order)).then(() => 1);
};
module.exports = addOrder;

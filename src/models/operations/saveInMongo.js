const saveInMongo = (schema, data) => {
  data.map(product => {
    const productModel = new schema(product);
    productModel
      .save()
      .then(r => console.log(r).catch(error => console.log(error)));
  });
};

module.exports = saveInMongo;

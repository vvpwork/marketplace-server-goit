const addUserDb = require("../../helper/user/createUserMongo");

const signUp = (req, res) => {
  const data = req.body;
  const resOk = dataUser => {
    res.json({
      status: "success",
      user: dataUser
    });
  };

  const resErorr = error => {
    res.json({
      status: "error",
      error
    });
  };

  addUserDb(data)
    .then(dataUserDb => resOk(dataUserDb))
    .catch(error => resErorr(error));
};

module.exports = signUp;

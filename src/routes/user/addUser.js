const addUserDb = require("../../helper/user/addUserDb");

const signUp = (req, res) => {
  const data = req.body;

  const resOk = () => {
    res.json({
      status: "success",
      user: data
    });
  };

  const resErorr = error => {
    res.json({
      status: "error",
      error
    });
  };

  addUserDb(data)
    .then(() => resOk())
    .catch(error => resErorr(error));
};

module.exports = signUp;

const getUser = require("../../helper/user/getUserFromIDd");

const getUserFromId = (req, res) => {
  const userId = req.params.id;
  const answer = {
    ok(user) {
      res
        .status(200)
        .set("content-type", "aplication/json")
        .json(user)
        .end();
    },

    error(error) {
      res
        .status(200)
        .setHeader("content-type", "aplication/json")
        .json({ status: "user not found", error })
        .end();
    }
  };

  getUser(userId)
    .then(r => (r ? answer.ok(r) : answer.error()))
    .catch(error => answer.error(error));
};

module.exports = getUserFromId;

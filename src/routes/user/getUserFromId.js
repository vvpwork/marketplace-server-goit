const getUser = require("../../helper/user/getUserFromIdMongo");
const userSchema = require('../../models/db/shemas/userShema');
const getUserFromId = (req, res) => {
  const userId = req.params.id;
  const answer = {
    ok(user) {
      res
        .status(200)
        .json(user)
        .end();
    },

    error(error) {
      res
        .status(200)
        .json({ status: "user not found", error })
        .end();
    }
  };

  getUser(userSchema,userId).exec((err, user)=>{
    if(!err) return answer.ok(user) 
    answer.error(err)
  })
    // .then(r => (r ? answer.ok(r) : answer.error()))
    // .catch(error => answer.error(error));
};

module.exports = getUserFromId;

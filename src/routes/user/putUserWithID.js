const updateForId = require("../../models/operations/updateForId");
const schema = require("../../models/db/shemas/userShema");
const putUserWithID = (req, res) => {
  const answer = {
    ok(update) {
      res.json({
        status: "success",
        product: update
      });
    },

    error(error) {
      res.json({
        status: "error",
        error
      });
    }
  };
  updateForId(schema, req)
    .then(updateUser => answer.ok(updateUser)) 
    .catch(error => answer.error(error));
};

module.exports = putUserWithID;

const hashPassword = require("../../helper/user/hashPassword");

const update = (schema, { body, params: { id } }) => {
  if (body.password) body.password = hashPassword(body.password);
  return schema.findOneAndUpdate({ _id: id }, body, { new: true });
};
module.exports = update;

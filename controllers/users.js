const User = require("../models/user");

function index(req, res, next) {
  res.render("users/index", {
    user: req.user,
    // name: req.query.name,
  });
  console.log(req.user);
}

module.exports = {
  index,
};

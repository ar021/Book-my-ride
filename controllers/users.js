const User = require("../models/user");
const Bike = require("../models/bike");

function show(req, res, next) {
  Bike.find({}, function (err, bikes) {
    res.render("users/show", {
      user: req.user,
      bikes,
      // name: req.query.name,
    });
    console.log(req.user);
  });
}

module.exports = {
  show,
};

const User = require("../models/user");
const Bike = require("../models/bike");

function index(req, res, next) {
  Bike.find({}, function (err, bikes) {
    res.render("users/index", {
      user: req.user,
      bikes,
      // name: req.query.name,
    });
    console.log(req.user);
  });
}

module.exports = {
  index,
};

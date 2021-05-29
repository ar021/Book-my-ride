const User = require("../models/user");
const Bike = require("../models/bike");

function show(req, res, next) {
  User.findById(req.params.id)
    .populate("vehicale")
    .exec(function (err, user) {
      Bike.find({})
        .where("_id")
        .nin(user.vehicale)
        .exec(function (err, bikes) {
          // console.log(bikes);
          console.log("###User:", user);
          res.render("users/show", { user, bikes });
        });
    });
}

// function show(req, res, next) {
//   Bike.find({}, function (err, bikes) {
//     res.render("users/show", {
//       user: req.user,
//       bikes,
//       // name: req.query.name,
//     });
//     console.log(req.user);
//   });
// }

module.exports = {
  show,
};

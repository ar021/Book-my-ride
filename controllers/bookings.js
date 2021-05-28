const User = require("../models/user");

function create(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    user.bookings.push(req.body);
    user.populate("bookings");

    user.save(function (err) {
      //   if (user.bookings.length) {
      //     user.populate("bookings");
      //     console.log(`After populate ${user}`);
      //   }
      console.log(`After populate ${user}`);
      res.redirect("/users");
    });
  });
}

module.exports = {
  create,
};

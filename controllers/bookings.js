const User = require("../models/user");

function create(req, res, next) {
  console.log("###request", req);
  console.log("###respond", res);
  User.findById(req.params.id, function (err, user) {
    user.bookings.push(req.body);
    // user.populate("bookings");
    // console.log(`req body ${req.body}`);
    const data = JSON.stringify(req.body);
    // console.log("new data", data);
    // console.log(req.body.bike);

    user.save(function (err) {
      //   if (user.bookings.length) {
      //     user.populate("bookings");
      //     console.log(`After populate ${user}`);
      //   }
      // console.log(`After populate ${user}`);
      res.redirect("/users");
    });
  });
}

module.exports = {
  create,
};

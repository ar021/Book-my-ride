const Bike = require("../models/bike");

function index(req, res) {
  Bike.find({}, function (err, bikes) {
    res.render("bikes/index", { title: "All Bikes", bikes });
  });
}

function newBike(req, res) {
  res.render("bikes/new");
}

function create(req, res) {
  // console.log(req.body);
  // console.log(req.file);
  let bike = new Bike(req.body);
  console.log(bike);
  bike.bikeImage.path = req.file.path;
  bike.bikeImage.filename = req.file.filename;
  console.log(`new bike ${bike}`);
  bike.save(function (err) {
    console.log(bike);
    if (err) return res.render("bikes/new");
    res.redirect("bikes/");
  });
}

module.exports = {
  index,
  new: newBike,
  create,
};

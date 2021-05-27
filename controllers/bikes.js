const Bike = require("../models/bike");

function index(req, res) {
  Bike.find({}, function (err, bikes) {
    res.render("bikes/index", { title: "All Bikes", bikes });
  });
}

function show(req, res) {
  Bike.findById({ _id: req.params.id }, function (err, bike) {
    if (err) {
      console.log(err);
      res.redirect("/bikes");
    } else {
      console.log("Bike:", bike);
      res.render("bikes/show", { bike });
    }
  });
}

function newBike(req, res) {
  res.render("bikes/new");
}

function create(req, res) {
  // console.log(req.body);
  // console.log(req.file);
  let bike = new Bike(req.body);
  // console.log(bike);
  bike.bikeImage.path = req.file.path;
  bike.bikeImage.filename = req.file.filename;
  // console.log(`new bike ${bike}`);
  bike.save(function (err) {
    console.log(bike);
    if (err) {
      console.log(`Error ${bike}`);
      res.redirect("/bikes/new");
    } else {
      console.log(`Success ${bike}`);
      res.redirect("/bikes");
    }
  });
}

function delBike(req, res, next) {
  Bike.findOneAndDelete({ _id: req.params.id }, function (err, bike) {
    if (err) {
      console.log(err);
      res.redirect("/bikes");
    } else {
      console.log("deleted Bike:", bike);
      res.redirect("/bikes");
    }
  });
}

module.exports = {
  index,
  show,
  new: newBike,
  create,
  delBike,
};

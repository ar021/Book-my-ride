const Bike = require("../models/bike");
const User = require("../models/user");

function index(req, res) {
  Bike.find({}, function (err, bikes) {
    res.render("bikes/index", { title: "All Bikes", bikes, user: req.user });
  });
}

function show(req, res) {
  Bike.findById({ _id: req.params.id }, function (err, bike) {
    if (err) {
      console.log(err);
      res.redirect("/bikes");
    } else {
      console.log("Bike:", bike);
      res.render("bikes/show", { bike, user: req.user });
    }
  });
}

function newBike(req, res) {
  res.render("bikes/new");
}

function create(req, res) {
  console.log("new bike", req.body);
  // console.log(req.file);
  let bike = new Bike(req.body);
  // console.log(bike);
  if (req.file) {
    bike.bikeImage.path = req.file.path;
    bike.bikeImage.filename = req.file.filename;
  }
  // console.log(`new bike ${bike}`);
  bike.save(function (err) {
    console.log(bike);
    if (err) {
      console.log(`Error ${bike}`);
      res.redirect("/bikes/new");
    } else {
      console.log(`Success ${bike}`);
      res.redirect(`/bikes/${bike._id}`);
    }
  });
}

function edit(req, res) {
  Bike.findById({ _id: req.params.id }, function (err, bike) {
    if (err) {
      // console.log(`iam ${err}`);
      res.redirect("/bikes");
    } else {
      // console.log(`iam2 ${err}`);
      res.render("bikes/edit", { bike });
    }
  });
}

function updateBike(req, res) {
  console.log(req.body);
  Bike.findById({ _id: req.params.id }, function (err, bike) {
    console.log(req.body);
    if (err) {
      console.log(err);
      res.redirect(`/bikes/${bike._id}`);
    } else {
      bike.brand = req.body.brand;
      bike.model = req.body.model;
      bike.year = req.body.year;
      bike.engine = req.body.engine;
      if (req.file) {
        bike.bikeImage.path = req.file.path;
        bike.bikeImage.filename = req.file.filename;
      }
      bike.price = req.body.price;
      bike.engineType = req.body.engineType;
      bike.power = req.body.power;
      bike.save();
      res.redirect(`/bikes/${bike._id}`);
    }
  });
}

function addToVehicale(req, res) {
  User.findById(req.params.id, function (err, user) {
    // console.log("--reqBody", req.body);
    // console.log("user vehicale", req.body.bikeId);
    user.vehicale.push(req.body.bikeId);
    user.save(function (err) {
      res.redirect(`/users/${user._id}`);
    });
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
  edit,
  updateBike,
  delBike,
  addToVehicale,
};

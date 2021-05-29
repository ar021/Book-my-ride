var express = require("express");
var router = express.Router();
const bikesCtrl = require("../controllers/bikes");
const cloudinary = require("../config/cloudinary");

router.get("/bikes", bikesCtrl.index);
router.get("/bikes/new", bikesCtrl.new);
router.get("/bikes/:id", bikesCtrl.show);
router.get("/bikes/:id/edit", bikesCtrl.edit);
router.put(
  "/bikes/:id",
  cloudinary.parser.single("bikeImage"),
  bikesCtrl.updateBike
);
router.post("/bikes", cloudinary.parser.single("bikeImage"), bikesCtrl.create);
router.post("/users/:id/bikes", bikesCtrl.addToVehicale);

router.delete("/bikes/:id", bikesCtrl.delBike);

module.exports = router;

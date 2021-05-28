var express = require("express");
var router = express.Router();
const bikesCtrl = require("../controllers/bikes");
const cloudinary = require("../config/cloudinary");

router.get("/", bikesCtrl.index);
router.get("/new", bikesCtrl.new);
router.get("/:id", bikesCtrl.show);
router.get("/:id/edit", bikesCtrl.edit);
router.put("/:id", cloudinary.parser.single("bikeImage"), bikesCtrl.updateBike);
router.post("/", cloudinary.parser.single("bikeImage"), bikesCtrl.create);

router.delete("/:id", bikesCtrl.delBike);

module.exports = router;

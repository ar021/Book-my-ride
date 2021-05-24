var express = require("express");
var router = express.Router();
const bikesCtrl = require("../controllers/bikes");
const cloudinary = require("../config/cloudinary");

router.get("/", bikesCtrl.index);
router.get("/new", bikesCtrl.new);
router.post("/", cloudinary.parser.single("bikeImage"), bikesCtrl.create);

module.exports = router;

var express = require("express");
var router = express.Router();
const bikesCtrl = require("../controllers/bikes");

router.get("/", bikesCtrl.index);
router.get("/new", bikesCtrl.new);
router.post("/", bikesCtrl.create);

module.exports = router;

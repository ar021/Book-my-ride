var express = require("express");
var router = express.Router();
const bookingsCtrl = require("../controllers/bookings");

router.post("/users/:id/bookings", bookingsCtrl.create);

module.exports = router;

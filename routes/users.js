var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  try {
    res.send("respond with a resource");
  } catch (error) {
    next(error);
  }
});

module.exports = router;

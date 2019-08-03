var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect("users/viewProducts");
});

router.get('/viewProducts', function(req, res, next) {
  res.render("user/viewProducts")
});

module.exports = router;

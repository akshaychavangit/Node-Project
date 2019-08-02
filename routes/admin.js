var express = require('express');
var router = express.Router();
var Addcategorycntrl = require("../controllers/addcategory.controller")

/* GET users listing. */
router
  .route("/")
  .get(function(req,res){
    res.redirect("admin/category")
  })

router
  .route("/category")
  .get(function(req,res){
    res.render("admin/categoryPage")
  })


router
  .route("/addcategory_action")
  .post(Addcategorycntrl.AddcategoryCntrl)

  // router
  // .route("/product")
  // .get(function(req,res){
  //   res.send("product")
  // })


module.exports = router;

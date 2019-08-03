var express = require('express');
var router = express.Router();
var Addcategorycntrl = require("../controllers/addcategory.controller")
var Addproductcntrl = require("../controllers/addproduct.controller")
var mongoose = require('mongoose');
var reqcategory = require('../models/category.js');
// console.log(reqcategory)



    

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

router
  .route("/product")
  .get(function(req,res){
    res.render("admin/productPage")
  })

router
  .route("/getCategory")
  .post(function(req,res){
    
    var category = mongoose.model('categorytbl', reqcategory.modcategory);
    category.find({},'_id , name', function (err, results) {
      // console.log(results)
      res.send(JSON.stringify(results))
    })

  })


  router
  .route("/addproduct_action")
  .post(Addproductcntrl.AddproductCntrl)


module.exports = router;

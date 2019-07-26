var express = require('express');
var router = express.Router();

//register controller
var Registercntrl = require('../controllers/register.controller.js')


router
	.route("/")
	.get(function(req,res){
		res.render("homePage")
	})

router
	.route("/register_action")
	.post(Registercntrl.RegisterCntrl)

	
		
	
module.exports = router;


var express = require('express');
var router = express.Router();
var validator = require('validator');

//register controller
var Registercntrl = require('../controllers/register.controller.js')
//login controller
var Logincntrl = require('../controllers/login.controller.js')


router
	.route("/")
	.get(function(req,res){
		res.render("homePage")
	})

router
	.route("/register_action")
	.post(Registercntrl.RegisterCntrl)

router
	.route("/login_action")
	.post(Logincntrl.LoginCntrl)
	
	
		
	
module.exports = router;


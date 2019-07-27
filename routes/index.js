var express = require('express');
var router = express.Router();
var validator = require('validator');

//register controller
var Registercntrl = require('../controllers/register.controller.js');
//login controller
var Logincntrl = require('../controllers/login.controller.js');
//redirect controller
var Redirectcntrl = require('../controllers/redirect.controller.js');
//activate controller
var Activatecntrl = require('../controllers/activate.controller.js');


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


router
	.route("/redirect")
	.get(Redirectcntrl.RedirectCntrl)
	

router
	.route("/activate/:id")
	.get(Activatecntrl.ActivateCntrl)
		
	
module.exports = router;


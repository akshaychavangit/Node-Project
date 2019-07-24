var express = require('express');
var router = express.Router();
var validator = require('validator');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meanmusicaldb', {useNewUrlParser: true});
/* GET home page. */
const login = require('../models/login') 
// console.log(login)
router.get('/', function(req, res, next) {
 	res.render("HomePage")
});

router.post('/register_action',function(req,res){
	// console.log(mongoose.connection.readyState);
	name = req.body.name
	email = req.body.email
	phoneno = req.body.phoneno
	address = req.body.address
	username = req.body.username
	password = req.body.password
	cpassword = req.body.cpassword


	if(validator.isAlpha(name)==false)
		res.send("Please enter proper name")
	else if(validator.isEmail(email)==false)
		res.send("Invalid email")
	else if(validator.isMobilePhone(phoneno,['en-IN'])==false)
		res.send("Invalid Mobile No")
	else if(validator.isAlphanumeric(username)==false)
		res.send("Invalid username")
	else if(validator.isAlphanumeric(password)==false)
		res.send("Please enter password properly")
	else if ((password == cpassword)==false)
		res.send("Password doesn't match")
	else
	{

		const item = new login({
			name:name,
			email:email,
			phoneno : phoneno,
			address:address,
			username:username,
			password:password
		});
		console.log(item)
		item.save().then(data=>{
			console.log("saved")
		})
		


		
	}



});

module.exports = router;


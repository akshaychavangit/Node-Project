var express = require('express');
var router = express.Router();
var validator = require('validator');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meanmusicaldb', {useNewUrlParser: true});
var session = require('express-session')
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
		bcrypt.hash(password, saltRounds, function(err, hash) {
			console.log(hash)
		password = hash

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
			res.send("Registered Successfully")
		})
	});
		
	}
});



router.post('/login_action',function(req,res){

	username = req.body.username

	password = req.body.password
	// console.log(username + password)
	login.findOne({username:username}, function (err, docs) {
		console.log(docs.username)

		if(docs.length!=0)
		{
			dbpass = docs.password
			if(password==dbpass)
			{
				req.session.username = docs.username
				req.session.address = docs.address
				req.session.phone = docs.phoneno
			}
		}
		
	  });
})

module.exports = router;


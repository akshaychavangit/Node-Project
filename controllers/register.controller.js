var express = require('express');
var app = express();

var mongoose = require('mongoose');
var logins = require('../models/login.js');
// console.log(logins);

//validator
var validator = require('validator');


//bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports.RegisterCntrl = function(req,res){
    name = req.body.name
	email = req.body.email
	phoneno = req.body.phoneno
	address = req.body.address
	username = req.body.username2
	password = req.body.password2
    cpassword = req.body.cpassword2

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
			// console.log(hash)
        password = hash
        var user = mongoose.model('logintbl', logins.modlogin);
        user.findOne({username:username},'username password', function (err, users) {
			// console.log(users)
			if (err) 
			{
				console.log(err)
				res.end("Something Went Wrong")
				return
			}
			else
			{
				// console.log(users)
				if(users == null)
				{
						const regdata = new logins({
                    	name:name,
                    	email:email,
                    	phoneno : phoneno,
                    	address:address,
                    	username:username,
                    	password:password
                    });
                    // console.log(regdata)
                    regdata.save().then(data=>{
                    	console.log("saved")
                    	res.end("Registered Successfully")
                    })
				}
				else
				{
					res.end("exist")
					
				}
			}
            
          });


		
	});
		
	}
    
    

};
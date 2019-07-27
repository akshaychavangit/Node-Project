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


var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	user: 'cyclopsattendance@gmail.com',
	pass: 'Akshay@123'
	}
});


module.exports.RegisterCntrl = function(req,res){
	var baseurl = req.headers.origin
	console.log(baseurl)
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
						password:password,
						flag:0
                    });
                    // console.log(regdata)
                    regdata.save().then(data=>{
						console.log(regdata._id)
						mailOptions = {
							from: 'cyclopsattendance@gmail.com', // sender address
							to: email, // list of receivers
							subject: 'Activation link of Brownie Point', // Subject line
							html: `<a href = "${baseurl}/activate/${regdata._id}">Activate your account</a>`
						};
						
						transporter.sendMail(mailOptions, (err, info) => {
							if(err) 
								console.log(err) 
							else 
							{
								res.end("Register successully. Check your mail to activate.")
							} 
						})
                    	// res.end("Registered Successfully")
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
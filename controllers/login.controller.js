var express = require('express');
var app = express();
var mongoose = require('mongoose');
var modlogin = require('../models/login.js')
// console.log(modlogin)

var validator = require('validator');
// console.log(validator)

const bcrypt = require('bcrypt');



var session = require('express-session')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'KOCProjects',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 600000 }
}))


module.exports.LoginCntrl = function(req,res){

    username = req.body.username1
    password = req.body.password1

    // console.log(username+password)

    
    var user = mongoose.model('logintbl', modlogin.modlogin);
    user.findOne({username:username}, 'username password address phoneno', function (err,result) {
        // console.log(err+"hello error")
        console.log(result)
        if(result==null)
        {
            res.end("Invalid Username")
        }
        else
        {
            dbpassword = result.password
            // console.log(req.session.username)
            bcrypt.compare(password, dbpassword, function(err, results) {
                // res == true
                    if(results == true)
                    {
                        console.log(result.username)
                        
                            req.session.username = result.username
                            req.session.address = result.address
                            req.session.phone = result.phoneno
                            // console.log(session)
                            res.send("1")
                    }
                    else
                    {
                        res.end("Invalid Password")
                    }
                });


        }
        
       
        
        
    })
}
    // console.log(mongoose)

    

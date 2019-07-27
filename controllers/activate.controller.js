var mongoose = require('mongoose');
var modlogin = require('../models/login.js')



module.exports.ActivateCntrl = function(req,res){
id = req.params.id
// console.log(id)
var user = mongoose.model('logintbl', modlogin.modlogin);
console.log(user)
user.findOneAndUpdate({_id:id},{$set: {flag:1}},function (err, doc) {
    console.log(doc)

    if (err) {

        console.log("update document error");

    }
     else
      {
          res.redirect("/")
    }

});


}
var validator = require('validator');
var reqproduct = require('../models/product.js');
// console.log(reqproduct)
var mongoose = require('mongoose');
var multer  = require('multer')


var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(1)
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      console.log(2)
      cb(null, Date.now() + file.originalname)
    }
  })
  
  var upload1 = multer({ 
      storage: storage1 ,
      fileFilter: function (req, file, callback) {
             // console.log(req.files.file.length)
          if(file.mimetype.indexOf("image/") == 0)
              callback(null, true)
          else
              callback(null, false)
          console.log(file)
      },
      limits:{
          fileSize: 5 * 1024 * 1024,
          fieldNameSize: 100,
          files: 1
      }
  }).single('prodfile')

module.exports.AddproductCntrl = function(req,res){


    upload1(req,res, function(err){
        if(err)
        {
            try
            {
                console.log("error")
                res.end("Please upload 5MB or less size image")
            }
            catch(e)
            {}
        }
        else
        {
            const file = req.file
              console.log(file)
              if (!file) {
                res.end('Please upload image file')
              }
              else
              {
                  name = req.body.txtproduct
                  type = req.body.txttype
                  price = req.body.txtprice
                  desc = req.body.txtdescription
                  category = req.body.ddlcategory


                
                  image = "./public/uploads/" + file.filename

                  var product = mongoose.model('producttbl', reqproduct.modproduct);
                 
                  const proddata = new product({
                   
                    name : name ,
                    category:category,
                    type : type,
                    price:price,
                    desc:desc,
                    image:image
                      })
                console.log(proddata)
                proddata.save()
                res.end("product added")
          }
    
        }
    })

    

    
}
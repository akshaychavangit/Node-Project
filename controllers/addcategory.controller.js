var reqcategory = require('../models/category.js');
// console.log(reqcategory)

var mongoose = require('mongoose');

var validator = require('validator');



module.exports.AddcategoryCntrl = function(req,res){


    name = req.body.txtcategory
    // console.log(name)

    if(validator.isAlpha(name)==false)
        res.send("Please enter category properly")
    else
    {
        // console.log(reqcategory.modcategory)
        var category = mongoose.model('categorytbl', reqcategory.modcategory);
        // console.log(category)
        // console.log(modcategory)
        category.findOne({name:name},'category', function (err, categoryname) {
			// console.log(users)
			if (err) 
			{
				console.log(err)
				res.end("Something Went Wrong")
				return
			}
			else
			{
                // console.log(categoryname)
                if(categoryname == null)
                {
                    
                    const catdata = new category({
                        name:name
                    })
                    console.log(catdata)
                    catdata.save()
                    res.end("Category added")

                }
                else
                {
                    res.end("category already exist")
                }
                
                
            }
        })
    }
   
   
}
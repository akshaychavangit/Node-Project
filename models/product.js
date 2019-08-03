const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
	
	name : String ,
	category:String,
	type : String,
    price:Number,
    desc:String,
	image:String


});
var modproduct = mongoose.model('producttbl',ProductSchema,'producttbl');
module.exports = modproduct

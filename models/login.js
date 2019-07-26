const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = Schema({
	
	name : String ,
	email:String,
	phoneno : Number,
	address:String,
	username:String,
	password:String



});
var modlogin = mongoose.model('logintbl',LoginSchema,'logintbl');
module.exports = modlogin

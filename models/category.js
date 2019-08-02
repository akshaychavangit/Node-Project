const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
	
	name : String

});
var modcategory = mongoose.model('categorytbl',CategorySchema,'categorytbl');
module.exports = modcategory

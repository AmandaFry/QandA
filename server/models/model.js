// require mongoose
var mongoose = require('mongoose');

//USER SECTION
//create the user schema
var userSchema = new mongoose.Schema({
	//validation, the filed cannot be empty and at least 2 character long in string format
	name: {type:String, required:true, minlength:2}
},{timestamps: true});

//Here where I create Users table
var Users = mongoose.model('Users', userSchema);

//QUESTION SECTION
//create the question schema 
var questionSchema = new mongoose.Schema({
	question: {type:String, required:true, minlength:5},
	description: {type: String, minlength:5},
	owner: {type:String, required:true},
	answerCount: {type:Number, required:true},
	// _owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true}
},{timestamps: true})

var Questions = mongoose.model('Questions', questionSchema)

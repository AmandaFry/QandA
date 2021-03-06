var mongoose = require('mongoose');
var Questions = mongoose.model('Questions');

module.exports = {

	//create a new question
	create: function(req, res){

		var question = new Questions(req.body)
		question.save(function(err){
			if(err)
				console.log(err);
			else{
				Questions.findOne({}, function(err,data){
					if(err)
						console.log(err)
					else{
						res.json(data);
					}
				}).sort({_id: -1});
			}
		})

	},

	//show all the question in the dashboard
	showAll: function(req,res){
		Questions.find({}, function(err,data){
            if(err)
                console.log(err);
            else
               res.json(data); //send back all the questions
        });
	},

	//send the question back as page title for the answer and q_and_a page
	showOne: function(req,res){
    	Questions.findOne({_id: req.params.id}, function(err,data){
    		if(err)
                console.log(err);
            else
                res.json(data);//send back one the questions
        });
    },


}	
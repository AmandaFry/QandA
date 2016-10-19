var mongoose = require('mongoose');
var Answers = mongoose.model('Answers');
var Questions = mongoose.model('Questions');

module.exports = {

	create: function(req, res){
		var answers = new Answers(req.body)
		answers.save(function(err){
			if(err)
				console.log(err);
			else{
				//if inserted the answer than find the question it belongs to
				Questions.findOne({_id: req.body.questionID}, function(err,data){
					if(err)
						console.log(err)
					else{
						//increase the answercount
						data.answerCount += 1;
						data.save(function(err){
			            	if(err){
			                 	console.log(err)
				            }else{
				                res.json({status: 'complete'})// this is really not needed other than tell the call back function that the process is done
				            }
			         	})
					}
				})
			}
		})

	},

	//get answers for q_and_a page
	showSome: function(req, res){
		Answers.find({questionID: req.params.id}, function(err, data){
			if(err)
                 console.log(err);
            else
                res.json(data); 
        });
	},

	//this is an update for the like
	like: function(req,res){
		Answers.findOne({_id: req.body._id}, function(err,data){
			if(err){
				console.log(err);
			}
            else{//if I don't have an error update the record
            	data.likes = data.likes + 1;
	        	data.save(function(err){
	            	if(err){
	                 	console.log(err)
		            }else{
		                res.json(data)// this is really not needed other than tell the call back function that the process is done
		            }
	         	})
            }     
        })
	},

}//end of module.export
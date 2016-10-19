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


}//end of module.export
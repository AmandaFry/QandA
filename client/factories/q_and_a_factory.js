myApp.factory('q_and_aFactory', function($http){
	var factory={}; //create an initial jason to store data

	factory.showOne = function(id,callback){
		$http.get('/question/showone/'+id).success(function(output){
			qinq_and_a = output;
			callback(qinq_and_a);
		})
	}

	factory.showAnswers = function(id,callback){
		$http.get('/answer/showq_and_a/'+id).success(function(output){
			answers = output;
			callback(answers);
		})
	}

	return factory;// make sure I return the result
});
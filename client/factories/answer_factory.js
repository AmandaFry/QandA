myApp.factory('answerFactory', function($http){
	var factory={}; //create an initial jason to store data

	factory.create = function(newA, callback){
		$http.post('/new_answer', newA).success(function(data){
			callback();
		});
	};

	factory.showOne = function(id,callback){
		$http.get('/question/showOne/'+id).success(function(output){
			qinAnswer = output;
			callback(qinAnswer);
		})
	}

	return factory;// make sure I return the result
});
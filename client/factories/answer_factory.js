myApp.factory('answerFactory', function($http){
	var factory={}; //create an initial jason to store data

console.log('inside answerFactory')
	factory.create = function(newA, callback){
		$http.post('/new_answer', newA).success(function(data){
			callback();
		});
	};


	return factory;// make sure I return the result
});
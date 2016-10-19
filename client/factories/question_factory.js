myApp.factory('questionFactory', function($http){
	var factory={}; //create an initial json to store data

	factory.create = function(newQ, callback){
		$http.post('/new_question', newQ).success(function(data){
			callback();
		});
	};


	return factory;// make sure I return the result
});
myApp.factory('questionFactory', function($http){
	var factory={}; //create an initial json to store data

	factory.create = function(newQ, callback){
		$http.post('/new_question', newQ).success(function(data){
			callback();
		});
	};

	factory.showAll = function(callback){
		$http.get('/question/showAll').success(function(data){
			callback(data);
		})
	}

	return factory;// make sure I return the result
});
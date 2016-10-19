myApp.controller('q_and_aController', function ($scope, $location,$routeParams,$cookies,q_and_aFactory){

	//CURRENT USER SECTION - this section to read from session cookie the current user info
	//In user_factory I put/set the current user cookie
	//I call it here an dable to use it
	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;

	//capture the id from the URL
	var questionId = $routeParams.id;

	
	//get question
	q_and_aFactory.showOne(questionId, function(dataQ){
		$scope.qinq_and_a = dataQ;
	})

	//get answers
	q_and_aFactory.showAnswers(questionId, function(dataA){
		$scope.answers = dataA;
	})

})
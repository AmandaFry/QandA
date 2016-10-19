myApp.controller('questionController', function ($scope, $location,$routeParams,$cookies, questionFactory){

	//In user_factory I put/set the current user cookie
	//I call it here an dable to use it
	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;
	
	//Cancel button - redirect back to prevouse page in this case was dashboard
	$scope.cancel = function(){
		$location.url('/dashboard');
	}

	//submit button
	$scope.questionCreate = function(){
		//I can access the newQ.question and newQ.description, I need to add owner id and anser count
		$scope.newQ.owner = $scope.currentUser._id;
		$scope.newQ.answerCount = 0;
		questionFactory.create($scope.newQ, function(){
			//after a new question is created I  want to redirect to dashbaord to show new question
            $location.url('/dashboard');
		})
	}
})
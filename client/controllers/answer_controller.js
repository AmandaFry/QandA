myApp.controller('answerController', function ($scope, $location,$routeParams,$cookies,answerFactory, questionFactory){

	//read from current cookie session (this seesm not global info)
	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;

	//Able to capture ID from URL
	var questionId = $routeParams.id;

	//need to add the question
	answerFactory.showOne(questionId, function(data){
		$scope.qinAnswer = data;
		$location.url('/answer/'+ questionId)
	})

	//Cancel button - redirect back to prevouse page in this case was dashboard
	$scope.cancel = function(){
		$location.url('/dashboard');
	};

	//submit button, adding new answer
	$scope.answerCreate = function(){
		//I can access the newQ.question and newQ.description, I need to add the other informations
		$scope.newA.owner = $scope.currentUser.name;
		$scope.newA.likes = 0;//new question will have no likes yet but I need to create initial setting to 0
		$scope.newA.questionID = questionId;
		//after creating new answer redirect to dashboard and increase answer count by 1
		answerFactory.create($scope.newA, function(){
            $location.url('/dashboard');
		})
	};

})

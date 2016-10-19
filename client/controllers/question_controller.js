myApp.controller('questionController', function ($scope, $location,$routeParams,$cookies, questionFactory){

	//In user_factory I put/set the current user cookie
	//I call it here an dable to use it
	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;
	
})
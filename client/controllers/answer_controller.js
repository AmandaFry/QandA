myApp.controller('answerController', function ($scope, $location,$routeParams,$cookies,answerFactory, questionFactory){

	//read from current cookie session (this seesm not global info)
	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;


})

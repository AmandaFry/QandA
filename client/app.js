var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', 'ngCookies']); //global value now

//this is how to navigate between partials
myApp.config(function ($routeProvider){
	$routeProvider
    .when('/',{
        templateUrl: 'partials/login.html',
        controller: 'loginController',
    })
    .when('/dashboard',{
    	templateUrl: 'partials/dashboard.html',
    	controller: 'dashboardController',
    })
    .when('/question',{
        templateUrl: 'partials/new_question.html',
        controller: 'questionController',        
    })
    .when('/q_and_a/:id',{
        templateUrl: 'partials/q_and_a.html',
        controller: 'q_and_aController',
    })
    .when('/answer/:id',{
        templateUrl: 'partials/answer.html',
        controller: 'answerController',
    })
	.otherwise({
		redirectTo: '/'
	})
});



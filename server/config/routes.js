var users = require('../controllers/users_controller.js');
var question = require('../controllers/questions_controller.js');
var answer = require('../controllers/answers_controller.js');


module.exports = function(app){

	app.post('/users/create', function(req, res) {
        users.create(req, res);
    });

    app.post('/new_question', function(req, res){
    	question.create(req, res);
    });

    app.get('/question/showAll', function(req,res){
    	question.showAll(req,res);
    });

    app.post('/new_answer', function(req, res){
        answer.create(req, res);
    });

    app.get('/question/showOne/:id', function(req,res){
        question.showOne(req, res);
    });

    app.get('/question/showOne/:id', function(req,res){
    	console.log('inside routes showOne')
        question.showOne(req, res);
    });

    app.get('/answer/showq_and_a/:id', function(req,res){
        answer.showSome(req, res);
    });

    app.post('/answer/like', function(req,res){
    	console.log('inside routes like')
        answer.like(req,res);
    });
}
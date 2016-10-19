var users = require('../controllers/users_controller.js');
var question = require('../controllers/questions_controller.js');


module.exports = function(app){

	app.post('/users/create', function(req, res) {
        users.create(req, res);
    });

    app.post('/new_question', function(req, res){
    	console.log('inside routes') //too see I got here
    	console.log(req.body) // to see what did I send
    	question.create(req, res);
    });


}
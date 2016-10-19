/*
1, I will need 5 partials
	login
	dahboard /home
	new_question /add question
	q_and_a /Q&A
	answer /Answer the question	

2,  Client side 
	2 controller
		users
		questions
		answers
		dasboard(may be able to replaced with questions)

3,	x factories
		users
			create
			find one
			//may not need the two below as it not show the 
				find all (?)
				find all with - condition users with answers (?)
		questions
			create
			find one
			find all
			find all - condition with answers
					 - with likes
		answers
			create
			findOne
			find all
			find all - condition with answers
					 - with likes


4, Routes - client app.js
	/ (login)
	/dashboard
	/new_question
	/question/:id 
	/question/:id/new_answer
	/new_answer


5, Routes - server

	post /users/create
	get /users/showOne
	post /question
	get /questionOne
	get /questionAll
	post /answer
	get /answerOne
	get /answerAll
	get /answerCondition


6, controller - server
	user_controller
	question_controller
	answer_controller

7, models
	users
		name - string, required,  minlength 3
	questions
		question - string, required, minlength  5
		description - string, minlenght 5
		owner - id, required
	answers
		answer - string, required, minlength  5
		supporting - string, minlenght 5
		likes - number
		owner - id, required
		question - id, required


*/

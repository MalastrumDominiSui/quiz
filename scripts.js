window.addEventListener("load", function(){
	//QUIZ VARIABLES AND CONSTANTS
	//gathers the text box the user will type into for the quiz
	var questionField = document.getElementsByClassName("question_field");
	// gathers the submit buttons, as many
	var submit = document.getElementsByClassName("submitbutton");

	const QUESTIONS = ["What is your name?","What is your quest?","What is your favorite color?",];  //same TODO as below
	const ANSWERS =  ["sumeetbenallenevinleannaaaronspencerjamiemike", "holygrail", "blueyellow"];  //TODO find out if this is the best arrangement for this DATA
	var totalQuestions = 0;
	var score = 0;

	//MODAL VARIABLES
	// Get the modal
	var modal = document.getElementById('myModal');
	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];


	//listens to submit button, runs newQuestion with event click from submit
	submit[0].addEventListener("click", newQuestion);

	//initializes first question
	questionField[0].innerHTML = QUESTIONS[0];


	// if the answer is related to our expected answers, provides answer correct
	function answerEquals(count, answerStr){
		if (answerStr.includes(answers[count].toLowerCase())||answers[count].toLowerCase().includes(answerStr)){
			questionField[0].innerHTML = "CORRECT"; // TODO  make this text pop up in the modal window, also this shouldn't happen here
			score = score + 1;
		} else {
			questionField[0].innerHTML = "INCORRECT";  // TODO make this text pop up in the modal window, this shouldn't happen here
		}
		totalQuestions = totalQuestions + 1;
	}


	// takes the event of clicking the submit button, compares answer, pops up modal response
	function newQuestion(e){

		answerEquals(totalQuestions, e.target.previousElementSibling.value);

		questionField[0].innerHTML = QUESTIONS[totalQuestions];

		e.preventDefault();
	}


	//MODAL FUNCTIONS


	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}




});



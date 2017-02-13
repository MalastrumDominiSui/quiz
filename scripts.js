window.addEventListener("load", function(){


			//terminal stuff
		var $typingLines = document.getElementsByClassName("terminal_user_input");
		var $currentLine =$typingLines[$typingLines.length-1];
		var $aiTyper = document.getElementsByClassName("ai_typer")
		var $submitButton = document.getElementsByClassName("submit_button");
		//focus on the simulated Terminal
		$currentLine.focus();

	function modelPage(){
		//terminal stuff
		var $typingLines = document.getElementsByClassName("terminal_user_input");
		var $currentLine =$typingLines[$typingLines.length-1];
		var $aiTyper = document.getElementsByClassName("ai_typer")
		var $submitButton = document.getElementsByClassName("submit_button");
		//focus on the simulated Terminal
		$currentLine.focus();
	}

	modelPage();

	// // refocuses on "terminal" if we click anywhere else
	// window.addEventListener("click", function(){
	// 	$currentLine.focus();
	// 	event.preventDefault(); //without this we refresh the page!
	// })

	// awaits keypress from invisible submit button
	$submitButton[0].addEventListener("click",function(){
		if (totalQuestions < 2){
			answerQ(event.target.previousElementSibling.value.toLowerCase());
		} else {
			//end the dialogue or show score
		}	
	});

	//QUIZ VARIABLES AND CONSTANTS
	const QUESTIONS = ["What is your name?","What is your quest?","What is your favorite color?",];  //same TODO as below
	const ANSWERS =  ["sumeetbenallenevinleannaaaronspencerjamiemike", "holygrailcodehtmlcssjobcareergoalsbarbequecoffeequalityjavascriptrubysinatraomahaschoolsucceed", "blue yellow"];  //TODO find out if this is the best arrangement for this DATA
	var totalQuestions = 0;
	var score = 0;
	const NEWTERMINALDIV = "<div class=\"terminal_line\">" +
			"<p>>_: </p>" +
			"<p class=\"ai_typer\"></p>" +
			"<form>" +
				"<input class=\"terminal_user_input\" type=\"text\" autocomplete=\"off\">" +
				"<input type=\"submit\" value=\"Submit\" class=\"submit_button\" style=\"display: none\">" +
			"</form>" +
		"</div>"

	//during submit event;takes a string and adds a new element to HTML document with that string
	function addLine(str){
		var newDiv = document.createElement("div");
		var node = document.createTextNode(NEWTERMINALDIV);
		newDiv.appendChild(node);
		event.target.parentElement.parentElement.parentElement.appendChild(newDiv);
	}

	// during submit event; takes user string, checks if answer is close
	function answerQ(userString){
		switch(totalQuestions){
			case 0: //1st question
				if(ANSWERS[totalQuestions].includes(userString)){
					addLine();
					modelPage();
					showText($aiTyper[$aiTyper.length-1], "This is somewhat an acceptable answer. We can proceed further.", 0, 40);
					totalQuestions ++;
					addLine();
					modelPage();
					showText($aiTyper[$aiTyper.length-1], QUESTIONS[totalQuestions], 0, 40);
					event.preventDefault();
				}
				else{
					addLine();
					modelPage();
					showText($aiTyper[$aiTyper.length-1], "This is unnacceptable. You are not a Code School student. You have been cast into the Abyss.", 0, 40);
					event.preventDefault();
					// tryAgain();
				}
			case 1://2nd question
				if(ANSWERS[totalQuestions].includes(userString)){
					addLine();
					modelPage();
					showText($aiTyper[$aiTyper.length-1], "Great! It is good to meet someone so intelligent.", 0, 40);
					totalQuestions ++;
					addLine();
					modelPage();
					showText($aiTyper[$aiTyper.length-1], QUESTIONS[totalQuestions], 0, 40);
					event.preventDefault();
				}
				else{
					addLine();
					modelPage();
					showText($aiTyper[$aiTyper.length-1], "This is unnacceptable. You are not a Code School student. Better luck next time.", 0, 40);
					event.preventDefault();
					// tryAgain();
				}

			case 2:

		}

	}


	//this function displays text slowly like typing
 	var showText = function (target, message, index, interval) {    
  		if (index < message.length) {
    		target.append(message[index++]); 
    		setTimeout(function () { showText(target, message, index, interval); }, interval); 
  		} 
	}

	//this sets the initial text of the quiz
    showText($aiTyper[0], "What is your Name?", 0, 40);

});



window.addEventListener("load", function(){

	var textField = document.getElementById("ai_typer")
	var btnSubmit = document.getElementById("submit_button")

	$currentLine.focus();

	btnSubmit.addEventListener("click", function(){
		textField.innerText = event.target.innerText;
		event.preventDefault();
	});


});

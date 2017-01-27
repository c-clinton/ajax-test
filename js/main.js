(function() {

var httpRequest,
ajaxText = document.querySelector('.placeholder'),
ajaxButton = document.querySelector('.wrapper');

function makeRequest(url) {  //text.txt is passed into the url
	httpRequest = new XMLHttpRequest();

	if (!httpRequest){

		console.log('Unable to use AJAX');
		return false;
	}

	httpRequest.onreadystatechange = showResults;
	httpRequest.open('GET', url);
	httpRequest.send();
}

function showResults() {

if(httpRequest.readyState === XMLHttpRequest.DONE) {
	if(httpRequest.status === 200) { //200 is a code used to communicate with the server, it indicates everything is all clear

		var response = httpRequest.responseText;
		ajaxText.innerHTML = response;
	}else{

		console.log('There was an error with your request');
	}
}
}



ajaxButton.addEventListener('click', function() {makeRequest('text.txt'); }, false); //this requires an inline event listener with a nested function to work

})();
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "Welterweight") {
		correct++; }

	if (question2 == "50-0") {
		correct++; }
	
	if (question3 == "6") {
        correct++; }
        
    if (question4 == "George Foreman") {
        correct++; }

    if (question5 == "17") {
        correct++; }

    if (question6 == "southpaw") {
        correct++; }

    if (question7 == "3 minutes") {
        correct++; }

    if (question8 == "60 seconds") {
        correct++; }

    if (question9 == "1997") {
        correct++; }
                                
    if (question10 == "Louisville, KY") {
        correct++; }
	}
	
	var pictures = ["img/carlton.gif", "img/thumbsdown.jpeg", "img/cryingjordan.gif"];
	var messages = ["Knockout!", "Ehh", "Stick to your day job.."];
    var range;
    // var range;


    if (correct == 0) {
		range = 2;
	}

	if (correct > 0 && correct < 9) {
		range = 1;
	}

	if (correct == 9) {
		range = 0;
	}

	// if (correct < 2) {
	// 	range = 2;
	// }

	// if (correct > 0 && correct < 6) {
	// 	range = 1;
	// }

	// if (correct > 9) {
	// 	range = 0;
	// }

	document.getElementById("after_submit").style.visibility = "visible";
//     simplify this 
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];



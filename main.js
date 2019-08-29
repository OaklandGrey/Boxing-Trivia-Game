// function check(){

// 	var question1 = document.quiz.question1.value;
// 	var question2 = document.quiz.question2.value;
//     var question3 = document.quiz.question3.value;
//     var question4 = document.quiz.question4.value;
//     var question5 = document.quiz.question5.value;
//     var question6 = document.quiz.question6.value;
//     var question7 = document.quiz.question7.value;
//     var question8 = document.quiz.question8.value;
//     var question9 = document.quiz.question9.value;
//     var question10 = document.quiz.question10.value;
// 	var correct = 0;


// 	if (question1 == "Welterweight") {
// 		correct++; }

// 	if (question2 == "50-0") {
// 		correct++; }
	
// 	if (question3 == "6") {
//         correct++; }
        
//     if (question4 == "George Foreman") {
//         correct++; }

//     if (question5 == "17") {
//         correct++; }

//     if (question6 == "southpaw") {
//         correct++; }

//     if (question7 == "3 minutes") {
//         correct++; }

//     if (question8 == "60 seconds") {
//         correct++; }

//     if (question9 == "1997") {
//         correct++; }
                                
//     if (question10 == "Louisville, KY") {
//         correct++; }
// 	}
	
// 	var pictures = ["img/carlton.gif", "img/thumbsdown.jpeg", "img/cryingjordan.gif"];
// 	var messages = ["Knockout!", "Ehh", "Stick to your day job.."];
//     var range;
//     // var range;


//     if (correct == 0) {
//         range = 2;
// 	}

	// if (correct > 0 && correct < 9) {
	// 	range = 1;
	// }

	// if (correct == 9) {
	// 	range = 0;
	// }

	// if (correct < 2) {
	// 	range = 2;
	// }

	// if (correct > 0 && correct < 6) {
	// 	range = 1;
	// }

	// if (correct > 9) {
	// 	range = 0;
	// }

	// document.getElementById("after_submit").style.visibility = "visible"; 
	// document.getElementById("message").innerHTML = messages[score];
	// document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	// document.getElementById("picture").src = pictures[range];




    var questions = [
        {
          "question": "Beating Conor McGreggor brought Floyd Mayweather's record to what?",
          "allAnswers": ["30-0", "52-0", "50-0", "41-0"],
          "correctAnswer": "50-0"
        },
        {
          "question": "Not including Creed, How many Rocky movies are there?",
          "allAnswers": ["5", "6", "7", "9"],
          "correctAnswer": "6"
        },
        {
          "question": "What 2 time heavyweight champion makes more money from selling kitchen appliances than he did in his entire boxing career?",
          "allAnswers": ["Mike Tyson", "Evander Holyfield", "George Foreman", "Joe Frazier"],
          "correctAnswer": "George Foreman"
        },
        {
          "question": "How many weight classes are there in boxing?",
          "allAnswers": ["8", "13", "17", "22"],
          "correctAnswer": "17"
        },
        {
          "question": "A boxer fighting opposite of orthodox style is called what?",
          "allAnswers": ["southpaw", "B style", "southstance", "shadowboxer"],
          "correctAnswer": "southpaw"
        },
        {
          "question": "In a 12 round boxing match, how long is each round?",
          "allAnswers": ["2 minutes", "3 minutes", "4 minutes", "5 minutes"],
          "correctAnswer": "3 minutes"
        },
        {
          "question": "How long is the break between each round?",
          "allAnswers": ["20 seconds", "30 seconds", "45 seconds", "60 seconds"],
          "correctAnswer": "60 seconds"
        },
        {
          "question": "What year did Mike Tyson have Evander Holyfield's ear for a mid fight snack?",
          "allAnswers": ["1995", "1996", "1997", "1998"],
          "correctAnswer": "1997"
        },
        {
          "question": "Who was  the only fighter to stop Muhammad Ali in a heavyweight title fight?",
          "allAnswers": ["Trevor Berbick", "Larry Holmes", "Sonny Liston", "Joe Frazier"],
          "correctAnswer": "Larry Holmes"
        },
        {
          "question": "Where was Muhammad Ali born?",
          "allAnswers": ["Nashville, TN", "Chicago,  IL", "Louisville, KY", "Birmingham, AL"],
          "correctAnswer": "Louisville, KY"
        }];
        
        var content = document.getElementById("content");
        var questionHolder = document.getElementById("question");
        var choicesHolder = document.getElementById("choices");
        var scoreHolder = document.getElementById("score");
        var submitButton = document.getElementById("submit");
        
        var questionTracker = 0;
        var score = 0;
        var wasQuestionAsked = true;
        // var timer = setInterval(counter, 1000);
        
        function askQ()
        {
          var choices = questions[questionTracker].allAnswers;
          var tempChoices = "";
        
          for(var i = 0; i < choices.length; i++)
          {
            tempChoices += "<input type='radio' name='quiz" + questionTracker + "' id='choice" + (i + 1) + "' value='" + choices[i] +
             "'>" + " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
          } 
        
          /* QUESTIONS */
          questionHolder.textContent = "Question: " + (questionTracker + 1) + ". " + questions[questionTracker].question;
          /* ANSWERS */
          choicesHolder.innerHTML = tempChoices;
        
          /* SETUP, FIRST ITERATION */
          if(questionTracker == 0)
          {
            scoreHolder.textContent = "Score: 0 out of " + questions.length + " total questions.";
            submitButton.textContent = "Take a jab!";
          }
        }
        
        function validateAnswer()
        {
          /* CHECK IF QUESTION WAS ASKED DETERMINE IF WE PROCEED TO NEXT QUESTION */
          if(wasQuestionAsked)
          {
            submitButton.textContent = "Next Question";
            wasQuestionAsked = false;
        
            /* DETERMINE WHICH RADIO BUTTON WAS CLICKED */
            var userSelection, correctIndex;
            var radios = document.getElementsByName("quiz" + questionTracker);
            for(var i = 0; i < radios.length; i++)
            {
              /* IF RADIO BUTTON IS CHECKED */
              if(radios[i].checked)
              {
                userSelection = radios[i].value;
              }
        
              /* FIND CORRECT INDEX */ 
              if(radios[i].value == questions[questionTracker].correctAnswer)
              {
                correctIndex = i;
              }
            }
        
            var labelChange = document.getElementsByTagName("label")[correctIndex].style;
            labelChange.fontWeight = "bold";
            if(userSelection == questions[questionTracker].correctAnswer)
            {
              score++;
              labelChange.color = "#33cc00";
            }
            else
            {
              labelChange.color = "#cc0000";
            }
        
            scoreHolder.textContent = "Score: " + score + " out of " + questions.length + " possible.";
            /* MOVE ON TO NEXT QUESTION */
          }
          else
          {
            wasQuestionAsked = true;
            /* RESET BUTTON TEXT TO "SUBMIT QUESTION" */
            submitButton.textContent = "Take a jab!";
            /* IF WE HAVE NOT YET REACHED LAST QUESTION, STILL INCREASE Q BY ONE */
            if(questionTracker < questions.length - 1)
            {
              questionTracker++;
              askQ();
            }
            else
            {
              showFinalScore();
            }
          }
        }
        
        /* DISPLAY THE SCORE  */
        function showFinalScore()
        {
          content.innerHTML = "<h2 style='color:green;'>You've finished the Trivia Game!</h2>" + "<h2 style='color:black;'>These are your results:</h2>" +
           "<h2 style='color:red;'>" + score + " out of a total of " + questions.length + " questions." + "<br>" + "Your percentage was: " + Math.round(score / questions.length * 100) +
            "%</h2>" + "<br>" + "<button class='btn btn-warning' onclick='reset()'>Restart</button>";
        }
        
        /* RESET THE GAME */
        function reset()
        {
          location.reload();
        }
        
        window.addEventListener("load", askQ, false);
        submitButton.addEventListener("click", validateAnswer, false);
    
    //     document.addEventListener('click', musicPlay);
    //     function musicPlay() {
    //     document.getElementById('ID').play();
    //     document.removeEventListener('click', musicPlay);
    // }
    

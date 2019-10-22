$(document).ready(function() {
    $(".buttons").hide();
    $("#start").click(function() {
      $(".buttons").show();
      $("#start").hide();
    });
  });
  







function Question(text, choices, answer) {
  this.text = "text";
  this.choices = "choices";
  this.answer = "answer";
}

Question.prototype.correctAnswer = function(choices) {
  return choices === this.answer;
};

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};
Quiz.prototype.guess = function(answer) {
  this.questionIndex++;

  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
};
function populate() {
    if (quiz.isEnded()) {
      // showScores();
    } else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;
  
     /*var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i< choices.length; ++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
      }
    }
  }

  unction Question(text, choices, answer) {
  this.text = "text";
  this.choices = "choices";
  this.answer = "answer";
}

Question.prototype.correctAnswer = function(choices) {
  return choices === this.answer;
};

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};
Quiz.prototype.guess = function(answer) {
  this.questionIndex++;

  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
};



var questions = [
  new Question(
    "What flavour is Cointreau? ?",
    ["Vanilla", "Strawberry", "Orange", "Lemon"],
    "Orange"
  ),
  new Question(
    "How many crocus flowers does it take to make a pound of saffron?",
    ["75000", "7500", "750", "1000"],
    "75000"
  ),
  new Question(
    "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
    ["Pear", "Apple", "Quince", "Pumpkin"],
    "Apple"
  ),
  new Question(
    "If you had Lafite-Rothschild on your dinner table, what would it be?",
    ["Cocktail", "Aperitif", "Wine", "Brandy"],
    "Wine"
  ),
  new Question(
    "What colour is Absynthe?",
    ["White", "Yellow", "Green", "Brown"],
    "Green"
  )
];

var quiz = new Quiz(questions);

populate();

/*If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.*/

/*The scenario is similar for wrong answers and time-outs.

If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.



On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

$("#start-btn").on("click", function() {
  $(this).hide();
  startTrivia();
});

var questions = [
  {
    question: "What flavour is Cointreau?",
    choiceList: ["Vanilla", "Strawberry", "Orange", "Lemon"],
    answer: 2
  },
  {
    question: "What was Dom Perignon’s occupation when he invented Champagne?",
    choiceList: ["Monk", "Chemist", "Explorer", "Botanist"],
    answer: 0
  },
  {
    question: "Which ingredients make up a white lady",
    choiceList: [
      "Gin, Brandy, Lime Juice",
      "Gin, Cointreau, Lemon Juice",
      "Vodka, Cointreau, Lemon Juice",
      "Gin, Cointreau, Lime"
    ],
    answer: 1
  },
  {
    question:
      "If you had Lafite-Rothschild on your dinner table, what would it be?",
    choiceList: ["Cocktail", "Aperitif", "Brandy", "Wine"],
    answer: 3
  },
  {
    question: "What colour is Absynthe?",
    choiceList: ["White", "Yellow", "Green", "Brown"],
    answer: 2
  },
  {
    question: "How many standard wine bottles equals one Nebuchadnezzar?",
    choiceList: ["6", "20", "8", "2"],
    answer: 1
  }
];

var jpgArray = [
  "question1",
  "question2",
  "question3",
  "question4",
  "question5",
  "question6"
];
var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var number;
var time;
var answered;
var playerSelect;
var results = {
  correct: "Correct!!",
  incorrect: "Nope!!",
  timeOver: "Sorry, but you are Out of Time!!",
  finished: "All done, here's how you did!"
};

$("#startOver").on("click", function() {
  $(this).hide();
  startTrivia();
});

function startTrivia() {
  $("#finalResult").empty();
  $("#correctAnswers").empty();
  $("#incorrectAnswers").empty();
  $("#unanswered").empty();
  currentQuestion = 0;
  correctAnswer = 0;
  incorrectAnswer = 0;
  unanswered = 0;
  newQuestion();
}

function newQuestion() {
  $("#result").empty();
  $("#correctAnswer").empty();
  $("#jpg").empty();
  answered = true;

  //sets up new questions & choiceList

  $(".question").html("<h2>" + questions[currentQuestion].question + "</h2>");
  for (var i = 0; i < 4; i++) {
    var choices = $("<div>");
    choices.text(questions[currentQuestion].choiceList[i]);
    choices.attr({ "data-index": i });
    choices.addClass("thisChoice");
    $(".choiceList").append(choices);
  }
  countdown();
  //clicking an answer will pause the time and setup answerPage
  $(".thisChoice").on("click", function() {
    playerSelect = $(this).data("index");
    clearInterval(time);
    answerPage();
  });
}

function countdown() {
  number = 10;
  $("#countdown").html("<h3>Time Remaining: " + number + "  seconds</h3>");
  answered = true;
  //sets timer to go down
  time = setInterval(showCountdown, 1000);
}

function showCountdown() {
  number--;
  $("#countdown").html("<h3>Time Remaining: " + number + "  seconds</h3>");
  if (number < 1) {
    clearInterval(time);
    answered = false;
    answerPage();
  }
}

function answerPage() {
  $("#currentQuestion").empty();
  $(".thisChoice").empty(); //Clears question page
  $(".question").empty();

  var rightAnswerText =
    questions[currentQuestion].choiceList[questions[currentQuestion].answer];
  var rightAnswerIndex = questions[currentQuestion].answer;
  $("#jpg").html(
    '<img src = "assets/images/' +
      jpgArray[currentQuestion] +
      '.jpg" height = "200px" width = "200px">'
  );
  //checks to see correct, incorrect, or unanswered
  if (playerSelect == rightAnswerIndex && answered == true) {
    correctAnswer++;
    $("#result").html(results.correct);
  } else if (playerSelect != rightAnswerIndex && answered == true) {
    incorrectAnswer++;
    $("#result").html(results.incorrect);
    $("#correctAnswer").html("The correct answer was: " + rightAnswerText);
  } else {
    unanswered++;
    $("#result").html(results.timeOver);
    $("#correctAnswer").html("The correct answer was: " + rightAnswerText);
    answered = true;
  }

  if (currentQuestion == questions.length - 1) {
    setTimeout(scoreboard, 2000);
  } else {
    currentQuestion++;
    setTimeout(newQuestion, 2000);
  }
}

function scoreboard() {
  $("#result").empty();
  $("#correctAnswer").empty();
  $("#jpg").empty();

  $("#finalResult").html(results.finished);
  $("#correctAnswers").html("Correct Answers: " + correctAnswer);
  $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswer);
  $("#unanswered").html("Unanswered: " + unanswered);
  $("#startOver").addClass("reset");
  $("#startOver").show();
  $("#startOver").html("Start Over?");
}

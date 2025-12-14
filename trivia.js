const readline = require("readline");

// Create CLI interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Trivia questions array (Array + Objects)
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["A. Hyper Trainer Marking Language", "B. Hyper Text Markup Language", "C. High Text Machine Language"],
    answer: "B"
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["A. var", "B. let", "C. const"],
    answer: "C"
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: ["A. JSON.parse()", "B. JSON.stringify()", "C. JSON.convert()"],
    answer: "A"
  }
];

// Game state variables
let currentQuestionIndex = 0;
let score = 0;
let timer;

// functions
function startGame() {
  console.log("\n Welcome to the JavaScript Trivia Game!");
  console.log("You have 30 seconds to complete the quiz.\n");

  // Start game timer (Async feature)
  timer = setTimeout(endGame, 30000);

  askQuestion();
}
 
// Ask Question Function
function askQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endGame();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];

  console.log(`\nQuestion ${currentQuestionIndex + 1}:`);
  console.log(currentQuestion.question);

  currentQuestion.options.forEach(option => console.log(option));

  rl.question("\nEnter your answer (A, B, or C): ", handleAnswer);
}

// Handle User Answer Function
function handleAnswer(userInput) {
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userInput.toUpperCase() === correctAnswer) {
    console.log("Correct!");
    score++;
  } else {
    console.log(`Incorrect! The correct answer was ${correctAnswer}`);
  }

  currentQuestionIndex++;
  askQuestion();
}

// End Game Function
function endGame() {
  clearTimeout(timer);

  console.log("\nGame Over!");

  // Array iteration method (reduce)
  const totalQuestions = questions.reduce(count => count + 1, 0);

  console.log(`Your Score: ${score} / ${totalQuestions}`);
  console.log("Thanks for playing!");

  rl.close();
}

// Initialize Game
rl.question("Press ENTER to start the quiz...", () => {
  startGame();
});

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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
  question: "In software engineering, what is a variable?",
  options: [
    "A. A fixed value that cannot be changed during program execution",
    "B. A named storage location in memory whose value can change during program execution",
    "C. A function that performs a specific task"
  ],
  answer: "B"
}

];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startGame() {
  console.log("\n Welcome to the JavaScript Trivia Game!");
  console.log("You have 30 seconds to complete the quiz.\n");

  
  timer = setTimeout(endGame, 30000);

  askQuestion();
}

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


function handleAnswer(userInput) {
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userInput.toUpperCase() === correctAnswer) {
    console.log("Correct!");
    score++;
  } else {
    console.log('Incorrect! The correct answer was ${correctAnswer}');
  }

  currentQuestionIndex++;
  askQuestion();
}

function endGame() {
  clearTimeout(timer);

  console.log("\nGame Over!");
  const totalQuestions = questions.reduce(count => count + 1, 0);

  console.log(`Your Score: ${score} / ${totalQuestions}`);
  console.log("Thanks for playing!");

  rl.close();
}

rl.question("Press ENTER to start the quiz...", () => {
  startGame();
});

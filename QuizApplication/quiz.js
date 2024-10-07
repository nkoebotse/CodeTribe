const readlineSync = require('readline-sync');

// Quiz questions and answers
const questions = [
  { question: "is Elliot a professional software develper?", answer: "Yes" },
  { question: "What is 5 + 3?", answer: "8" },
  { question: "What is the square root of 16?", answer: "4" },
];

let currentQuestionIndex = 0;
let score = 0;
const questionTimeLimit = 10; // 10 seconds per question
const totalQuizTime = 60; // Total quiz duration in seconds

// Function to display remaining time
function displayRemainingTime(remainingTime) {
  console.log(`Time left for the current question: ${remainingTime}s`);
}

// Function to handle each question
function askQuestionAsync(index) {
  return new Promise((resolve) => {
    const question = questions[index];
    console.log(`\n${question.question}`);

    // Start countdown timer for each question
    let remainingTime = questionTimeLimit;
    const interval = setInterval(() => {
      remainingTime--;
      displayRemainingTime(remainingTime);
      if (remainingTime <= 0) {
        clearInterval(interval);
        console.log("Time's up!");
        resolve(false); // User failed to answer in time
      }
    }, 1000);

    // Get user input asynchronously
    setTimeout(() => {
      const userAnswer = readlineSync.question("Your answer: ");
      clearInterval(interval);
      if (userAnswer.trim().toLowerCase() === question.answer.toLowerCase()) {
        console.log("Correct!");
        resolve(true); // Correct answer
      } else {
        console.log("Incorrect.");
        resolve(false); // Incorrect answer
      }
    }, 0);
  });
}

// Function to start the quiz
async function startQuiz() {
  console.log("Quiz started!");

  // Start countdown for total quiz duration
  let remainingQuizTime = totalQuizTime;
  const quizTimer = setInterval(() => {
    remainingQuizTime--;
    console.log(`\nTotal time left for the quiz: ${remainingQuizTime}s`);

    if (remainingQuizTime <= 0) {
      clearInterval(quizTimer);
      console.log("\nQuiz timed out!");
      endQuiz();
    }
  }, 1000);

  // Ask questions asynchronously
  while (currentQuestionIndex < questions.length && remainingQuizTime > 0) {
    const answeredCorrectly = await askQuestionAsync(currentQuestionIndex);
    if (answeredCorrectly) score++;
    currentQuestionIndex++;
  }

  // End the quiz if all questions are answered
  clearInterval(quizTimer);
  endQuiz();
}

// Function to end the quiz and display the score
function endQuiz() {
  console.log("\nQuiz over!");
  console.log(`Final Score: ${score} / ${questions.length}`);
  process.exit(0); // Exit the application
}

// Start the quiz
startQuiz();

# Quiz Application with Timed Questions

This is a Node.js-based quiz application that asks users a series of timed questions. The application leverages asynchronous operations and timers to manage user input and ensure smooth handling of timed events.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [How to Run the Quiz](#how-to-run-the-quiz)
- [Quiz Logic](#quiz-logic)
- [Error Handling](#error-handling)
- [Possible Enhancements](#possible-enhancements)
- [License](#license)

## Features

- **Timed Questions**: Each question has a countdown timer using `setInterval`, and the user must answer before time runs out.
- **Asynchronous Question Handling**: Questions are handled asynchronously using `readline-sync` without blocking the main event loop.
- **Dynamic Question Flow**: The quiz automatically moves to the next question after the previous one is answered or when the time expires.
- **Overall Quiz Timer**: The entire quiz is capped with a total duration timer.
- **Final Score Display**: The quiz ends by showing the final score based on correct answers.
- **Error Handling**: Invalid input or quiz timeouts are managed gracefully.

## Requirements

- **Node.js** (version 12 or higher)
- **readline-sync** Node.js package

## Setup Instructions

1. **Clone the repository**  
   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
Install Dependencies
Install the required readline-sync package:
npm install readline-sync

How to Run the Quiz
Run the quiz in your terminal
Open your terminal and navigate to the project folder. Run the following command to start the quiz:

node quiz.js
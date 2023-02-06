let score = 0;
let questionIndex = 0;
let button;
let selected;


// Variables to get element by id from the index.html page
const questionBox = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const questionOptions = document.getElementById("choices");
const startButton = document.getElementById("start");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const submitButton = document.getElementById("submit");
const initials = document.getElementById("initials");
const highScores = document.getElementById("highscores");
const startScreen = document.getElementById("start-screen");

// Getting user data
const info = localStorage.getItem("user");
const userInfo = info ? JSON.parse(info) : [];

// Variables to hold sound files
const correctSound = new Audio();
correctSound.src = "./assets/sfx/correct.wav";
const wrongSound = new Audio();
wrongSound.src = "./assets/sfx/incorrect.wav";

// Element that hold the timer
const timer = document.getElementById("time");
let time = 120;
timer.innerText = time;
let timedInterval;

// Event listener for start button
startButton.addEventListener("click", () => {
    
});


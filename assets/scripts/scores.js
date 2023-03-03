function saveHighscore() {
  // Retrieve value of input box
  var initials = initials.value.trim();

  if (initials !== "") {
    // Retrieve saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };

    // Add to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // Move to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  //Present the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}


// Getting scores from localstorage or set to an empty array
function printHighscores() {
  let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  let clearButton = document.getElementById("clear");

  // Added high score in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  // Adding li tag for each high score
  highscores.forEach(function (score) {
    let liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    // Appending the high score on the page
    let olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });

}


// Running function on loaded page
printHighscores();


 
 


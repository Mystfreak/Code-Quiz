const storage = JSON.parse(localStorage.getItem("user")) || "[]";
const clearBtn = document.getElementById("clear");

function displayhighScore(storage){
  let highScore = '';
storage.map(
     highScore +=
       `<li style="list-style:none"><span class="span-score">User:</span>${user.initials}  <span class="span-score">Score:</span>${user.score}</li>`
   )
   highscores.innerHTML = highScore.join("");


   clearBtn.addEventListener("click", () => {
    localStorage.getItem("user");
    localStorage.removeItem("user");
    highscores.innerHTML = "";
  });
  }
   


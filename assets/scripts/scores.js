const storeInfo = JSON.parse(localStorage.getItem("userInfo")) || "[]";
const clearButton = document.getElementById("clear");

highScores.innerHTML = `
${storage
  .map(
    (user) =>
      `<li style="list-style:none"><span class="span-score">User:</span>${userInfo.initials}  <span class="span-score">Score:</span>${userInfo.score}</li>`
  )
  .join("")}
`;

clearButton.addEventListener("click", () => {
    localStorage.getItem("user");
    localStorage.removeItem("user");
    highscores.innerHTML = "";
  });

// L'image se remplace par sa version animée tant que la souris la survole.
const terminal = document.getElementById("terminal");

terminal.addEventListener("mouseover", () => {
  terminal.src = "images/terminal-anime.svg";
});

terminal.addEventListener("mouseout", () => {
  terminal.src = "images/terminal.svg";
});

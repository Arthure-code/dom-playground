// Le bouton compte ses propres clics et se réécrit à chaque fois.
const bouton = document.getElementById("compteur");
let clics = 0;

bouton.addEventListener("click", () => {
  clics += 1;
  bouton.textContent = `Tu m'as cliqué ${clics} fois`;
});

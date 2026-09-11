// Un clic sur le premier paragraphe réécrit le second.
const declencheur = document.getElementById("declencheur");
const cible = document.getElementById("cible");

declencheur.addEventListener("click", () => {
  cible.textContent = "Et voilà !";
});

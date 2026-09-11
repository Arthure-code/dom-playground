// Une seule fonction pour quatre boutons. L'écouteur est posé sur le parent :
// le clic remonte jusqu'à lui, et event.target désigne le bouton pressé.
const reactions = document.getElementById("reactions");
const reponse = document.getElementById("reponse");

reactions.addEventListener("click", (evenement) => {
  const bouton = evenement.target.closest("button");
  if (!bouton) {
    return;
  }

  for (const autre of reactions.querySelectorAll("button")) {
    autre.classList.toggle("active", autre === bouton);
  }
  reponse.textContent = bouton.dataset.message;
});
